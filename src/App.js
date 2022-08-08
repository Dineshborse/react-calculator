
import { useRef } from 'react';
import './App.css';
import NumericButtonRow from './Components/NumericButtonRow';

function App() {

  const displayFieldElement = useRef(0);
  const buttonRows = [["1", "2", "3", " / "], ["4", "5", "6", " - "], ["7", "8", "9", " + "], [".", "0", "=", " * "]];
  // const buttonRowTwo = ["4","5","6","-"];
  // const buttonRowThree = ["7","8","9","+"];
  // const buttonRowFour = [".","0","=","*"];

  const handleBtnClearClick = (e) => {
    displayFieldElement.current.value = ""
  }


  const handleBtnClick = (e) => {
    e.preventDefault();
    if (e.currentTarget.innerHTML !== "=") {
      // console.log(e.currentTarget.innerHTML)
      displayFieldElement.current.value = displayFieldElement.current.value + e.currentTarget.innerHTML
    }
    else{
      let val ="";
      try{
        val=eval(displayFieldElement.current.value);
        console.log(val);
      }
      catch(err){
        // console.log(err)
        val = "Syntax Error "
      }
      
      displayFieldElement.current.value = val;
    }

  }
  return (
    <div className="App-container">
      <div className='App-name-div'>Calculator</div>
      <div className='calculator-row'>
        <div className='calculator-display-field-container-div'>
        <input ref={displayFieldElement} className='calculator-display-field' type={"text"} readOnly={true} value={""}></input>
        </div>
        <button className='calculator-operation-btn' onClick={handleBtnClearClick}>C</button>
      </div>
      {buttonRows.map(element => {
        console.log(element)
        return <NumericButtonRow fields={element} BtnClick={handleBtnClick} />
      })}

    </div>
  );
}

export default App;
