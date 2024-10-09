import React, { useState } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import './ReactionTime.css';

const ReactionTime = () => {
    const [screen, setScreen] = useState('main-menu');
    const [reactionTime, setReactionTime] = useState(null);

    const startGame = () => {
        setScreen('waiting-for-green');
        setTimeout(() => {
            setScreen('green');
            setReactionTime(Date.now());
        }, Math.floor(Math.random() * 4000 + 3000));
    };

    const displayReactionTime = () => {
        if (screen === 'green') {
            const clickTime = Date.now();
            const rt = clickTime - reactionTime;
            setScreen('result');
            setReactionTime(rt);
        } else {
            alert('Too soon.\nClick to continue.');
        }
    };

    const tryAgain = () => {
        setScreen('main-menu');
    };

    return (
        <div>
            <div className={`screen ${screen === 'main-menu' ? 'active' : ''}`}>
                <h1>Reaction Time Test</h1>
                <p>Click as soon as you see the green color on the screen.</p>
                <MDBBtn onClick={startGame} color='warning' size="lg" className="custom-btn">Start</MDBBtn>
            </div>

            <div className={`screen ${screen === 'waiting-for-green' ? 'active' : ''}`}>
                <h1>Wait for the green color</h1>
            </div>

            <div
                className={`screen clickable-area ${screen === 'green' ? 'active' : ''}`}
                onClick={displayReactionTime}
            >
                <div className="message">
                    {screen === 'green' ? 'Click Now!' : ''}
                </div>
            </div>

            <div className={`screen result ${screen === 'result' ? 'active' : ''}`}>
                <h2>Your reaction time: {reactionTime} ms</h2>
                <MDBBtn color='warning' size="lg" className="custom-btn" onClick={tryAgain}>Try Again</MDBBtn>
            </div>
        </div>
    );
};

export default ReactionTime;
