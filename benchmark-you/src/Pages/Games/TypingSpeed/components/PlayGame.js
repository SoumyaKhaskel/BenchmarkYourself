import { useEffect, useState } from "react";
const PlayGame = ({onGame, onChangeScore}) => {
  const [defaultData] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  const [dataTyping, setDataTyping] = useState([]);
  const [textTyping, setTextTyping] = useState({
    value: '',
    position: 0
  });
    useEffect(() => {
      const addWord = (quantityAdd = 20) => {
        const arrayDefaultData = defaultData.split(' ');
        const gamingText = [];
        for (let index = 0; index < quantityAdd; index++) {
          const positionRandom = Math.floor(Math.random() * arrayDefaultData.length); 
          gamingText.push({
            value: arrayDefaultData[positionRandom],
            status: null
          });
        }
        setDataTyping(gamingText);
      }
      if(dataTyping.length === 0 || textTyping.position > (dataTyping.length - 1)){
        addWord();
        setTextTyping({...textTyping, position: 0});
      }
      
    }, [textTyping.position])
    const handleChangeTyping = e => {
        const valueInput = e.target.value;
        if(!valueInput.includes(' ')){
          setTextTyping({...textTyping, value: valueInput});
        }else if(textTyping.value !== ''){
          checkResult();
        }
    } 
    const checkResult = () => {
      const dataCheck = dataTyping;
      if(textTyping.value === dataCheck[textTyping.position].value){
        dataCheck[textTyping.position].status = true;
        onChangeScore(1);
      }else{
        dataCheck[textTyping.position].status = false;
        onChangeScore(-1);
      }
      setDataTyping(dataCheck);
      setTextTyping({value: '', position: textTyping.position + 1});
    }
  return (
    <div className="playing">
        <ul className="list">
        {
          (dataTyping).map((word, index) => 
            <li key={index} className={
              word.status === true 
              ? 'true' 
              : word.status === false 
              ? 'false'
              : ''
          }>
              {word.value}
          </li>
          )
        }
        </ul>
    <div className="inputForm">
      <input type="text" autoFocus value={textTyping.value} onChange={handleChangeTyping}/>
    </div>
  </div>
  )
}
export default PlayGame;