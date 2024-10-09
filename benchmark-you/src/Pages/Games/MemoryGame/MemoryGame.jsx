import React, { useState, useEffect } from 'react';
import './MemoryGame.css';

const MemoryGame = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [cards, setCards] = useState([]);
    const [flippedCardIndexes, setFlippedCardIndexes] = useState([]);
    const [totalFlips, setTotalFlips] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [loop, setLoop] = useState(null);
    const [gameWon, setGameWon] = useState(false); // New state to track game win

    const generateGame = () => {
        const dimensions = 4; // Adjust as needed

        if (dimensions % 2 !== 0) {
            throw new Error("The dimension of the board must be an even number.");
        }

        const emojis = ['🍐', '🍊', '🍋', '🍉', '🍇', '🍓', '🥑', '🥕', '🌽', '🥬'];
        const picks = pickRandom(emojis, (dimensions * dimensions) / 2);
        const items = shuffle([...picks, ...picks]);
        const initialCards = items.map((item, index) => ({
            id: index,
            emoji: item,
            flipped: false,
            matched: false,
        }));
        setCards(initialCards);
    };

    useEffect(() => {
        generateGame();
    }, []);

    useEffect(() => {
        if (gameStarted) {
            const interval = setInterval(() => {
                setTotalTime(prevTime => prevTime + 1);
            }, 1000);
            setLoop(interval);
        } else {
            clearInterval(loop);
        }

        return () => clearInterval(loop);
    }, [gameStarted]);

    useEffect(() => {
        if (flippedCardIndexes.length === 2) {
            const [firstIndex, secondIndex] = flippedCardIndexes;
            const newCards = [...cards];

            if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
                newCards[firstIndex] = { ...cards[firstIndex], matched: true };
                newCards[secondIndex] = { ...cards[secondIndex], matched: true };
            } else {
                setTimeout(() => {
                    newCards[firstIndex] = { ...cards[firstIndex], flipped: false };
                    newCards[secondIndex] = { ...cards[secondIndex], flipped: false };
                    setCards(newCards);
                }, 500); // Adjust the timeout value here (in milliseconds)
            }

            setCards(newCards);
            setFlippedCardIndexes([]);
            setTotalFlips(prevFlips => prevFlips + 1);
        }

       
        // Check if all cards are matched
const allMatched = cards.length > 0 && cards.every(card => card.matched);


        if (allMatched && !gameWon) {
            setGameWon(true); // Set gameWon to true when the game is won
            // Display Win message
            setTimeout(() => {
                document.querySelector('.win').innerHTML = `
                    <span class="win-text">
                        You won!<br />
                        with <span class="highlight">${totalFlips}</span> moves<br />
                        under <span class="highlight">${totalTime}</span> seconds
                    </span>
                `;
                clearInterval(loop);
                setTimeout(() => {
                    resetGame(); // Call resetGame instead of endGame
                }, 1000);
            }, 1000);
        }
    }, [flippedCardIndexes, cards, gameWon]); // Include gameWon in the dependencies

    const flipCard = index => {
        if (!gameStarted) {
            setGameStarted(true);
        }

        if (flippedCardIndexes.length < 2 && !cards[index].flipped && !cards[index].matched) {
            const newCards = [...cards];
            newCards[index] = { ...newCards[index], flipped: true };
            setCards(newCards);

            setFlippedCardIndexes(prevIndexes => [...prevIndexes, index]);
        }
    };

    const resetGame = () => {
        setGameStarted(false);
        setFlippedCardIndexes([]);
        setTotalFlips(0);
        setTotalTime(0);
        clearInterval(loop);
        setGameWon(false); // Reset gameWon when resetting the game
        generateGame();
        document.querySelector('.win').innerHTML = ''; // Clear the Win message
    };

    const shuffle = array => {
        const clonedArray = [...array];

        for (let i = clonedArray.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            const original = clonedArray[i];

            clonedArray[i] = clonedArray[randomIndex];
            clonedArray[randomIndex] = original;
        }
        return clonedArray;
    };

    const pickRandom = (array, items) => {
        const clonedArray = [...array];
        const randomPicks = [];

        for (let i = 0; i < items; i++) {
            const randomIndex = Math.floor(Math.random() * clonedArray.length);

            randomPicks.push(clonedArray[randomIndex]);
            clonedArray.splice(randomIndex, 1);
        }
        return randomPicks;
    };

    return (
        <div className='MG-con'>
            <div className="container">
                <div className="start-container">
                    <button className="start-button" onClick={resetGame}>
                        {gameStarted ? "Reset" : "Start"}
                    </button>
                </div>
                <div className="GAME">
                    <div className="CONTROLS">
                        <div className="stats">
                            <div className="moves">{totalFlips} moves</div>
                            <div className="timer">Time: {totalTime} sec</div>
                        </div>
                    </div>
                    <div className="board_container">
                        {cards.map((card, index) => (
                            <div
                                key={card.id}
                                className={`card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'matched' : ''}`}
                                onClick={() => flipCard(index)}
                            >
                                <div className="card-front"></div>
                                <div className="card-back">{card.flipped || card.matched ? card.emoji : ''}</div>
                            </div>
                        ))}
                     </div>
                {gameWon && ( // Conditionally render Win message if gameWon is true
                    <div className="win">
                        <div className="win-text">
                            You won!<br />
                            with <span className="highlight">{totalFlips}</span> moves<br />
                            under <span className="highlight">{totalTime}</span> seconds
                        </div>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
};

export default MemoryGame;
