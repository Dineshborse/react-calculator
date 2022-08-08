import React from "react"
import "./NumericButtonRow.css"

const NumericButtonRow = ({fields,BtnClick}) => {

    
    return (
        <div className='calculator-row' >
            <div className="calculator-numeric-btn-container">
            <button className='calculator-numeric-btn' onClick={BtnClick}>{fields[0]}</button>
            <button className='calculator-numeric-btn' onClick={BtnClick}>{fields[1]}</button>
            <button className='calculator-numeric-btn' onClick={BtnClick}>{fields[2]}</button>
            </div>
            <button className='calculator-operation-btn' onClick={BtnClick}>{fields[3]}</button>
        </div>
    );
}
export default NumericButtonRow