import './TypeSpeed.css'; 
import Alphabet from './components/Alphabet';
import MainPage from './components/MainPage';
import PlayGame from './components/PlayGame';
import EndGame from './components/EndGame';
import React, { useEffect, useState, useCallback  } from 'react';

function TyepSpeed() {

  const [statusGame, setStatusGame] = useState(null);
  const [score, setScore] = useState(null);
  
  useEffect(() => {
    if(statusGame === 'playing'){
      setScore({
        right: 0,
        wrong: 0
      });
      // run timeout 60s end game
      const timeOutGame = setTimeout(() => {
        setStatusGame('endGame');
      }, 60000);
      return () => clearTimeout(timeOutGame);
    }
  }, [statusGame])


  const handleChangeStatusGame = (status = 'playing') => {
    setStatusGame(status);
  } 
  const handleChangeScore = (type = 1) => {
    if(type === 1){
      setScore({...score, 
        right: score.right + 1
      });
    }else{
      setScore({...score, 
        wrong: score.wrong + 1
      });
    }
  }
  

  let showMain;
  switch (statusGame) {
    case 'playing':
      showMain = <PlayGame onGame={ handleChangeStatusGame } onChangeScore = { handleChangeScore }/>
      break;
    case 'endGame':
      showMain = <EndGame onGame={ handleChangeStatusGame } score = { score }/>
      break;
    default:
      showMain =  <MainPage onGame={ handleChangeStatusGame } />
      break;
  }
  
  return (
    <>
      <div className="Ts-style">
        {  showMain }
      </div>
    </>
  )
}

export default TyepSpeed;
