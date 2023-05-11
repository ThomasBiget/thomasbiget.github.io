import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './styles.scss';

function Calculatrice() {
  const [screen, setScreen] = useState('0');
  const [calcul, setCalcul] = useState('');

  const handleNumberBtn = (e: any) => {
    const currentNumber = e.currentTarget.value;
    if (screen === '0') {
      setScreen(currentNumber);
    } else {
      setScreen(screen + currentNumber);
      console.log(screen);
    }
  };

  const handleOperatorBtn = (e: any) => {
    const operator: string = e.currentTarget.value;
    setCalcul(screen + operator);
    setScreen('0');
    console.log(calcul);
  };

  const handleResultBtn = (e: any) => {
    setCalcul(calcul + screen);

    const result = calcul;

    setScreen(result);
    console.log(calcul);
  };

  const handleResetBtn = (e: any) => {
    setScreen('0');
    console.log(e.currentTarget.value);
  };
  return (
    <div className="main__calc">
      <h1>
        Calculatrice
        <Link to="/">
          <span>X</span>
        </Link>
      </h1>
      <div className="calc_width">
        <div className="main__calc-btn">
          <div className="main__calc-btn--screen">{screen}</div>
          <button className="main__calc-btn--erase" type="button" value={0} onClick={handleResetBtn}>C</button>
          <div className="main__calc-btn--pad">
            <button className="main__calc-btn--pad-blue" type="button" value={7} onClick={handleNumberBtn}>7</button>
            <button className="main__calc-btn--pad-blue" type="button" value={8} onClick={handleNumberBtn}>8</button>
            <button className="main__calc-btn--pad-blue" type="button" value={9} onClick={handleNumberBtn}>9</button>
            <button className="main__calc-btn--pad-red" type="button" value="/" onClick={handleOperatorBtn}>/</button>
            <button className="main__calc-btn--pad-blue" type="button" value={4} onClick={handleNumberBtn}>4</button>
            <button className="main__calc-btn--pad-blue" type="button" value={5} onClick={handleNumberBtn}>5</button>
            <button className="main__calc-btn--pad-blue" type="button" value={6} onClick={handleNumberBtn}>6</button>
            <button className="main__calc-btn--pad-red" type="button" value="*" onClick={handleOperatorBtn}>*</button>
            <button className="main__calc-btn--pad-blue" type="button" value={1} onClick={handleNumberBtn}>1</button>
            <button className="main__calc-btn--pad-blue" type="button" value={2} onClick={handleNumberBtn}>2</button>
            <button className="main__calc-btn--pad-blue" type="button" value={3} onClick={handleNumberBtn}>3</button>
            <button className="main__calc-btn--pad-red" type="button" value="-" onClick={handleOperatorBtn}>-</button>
            <button className="main__calc-btn--pad-blue" type="button" value={0} onClick={handleNumberBtn}>0</button>
            <button className="main__calc-btn--pad-red" type="button" value="." onClick={handleNumberBtn}>.</button>
            <button className="main__calc-btn--pad-red" type="button" onClick={handleResultBtn}>=</button>
            <button className="main__calc-btn--pad-red" type="button" value="+" onClick={handleOperatorBtn}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculatrice;
