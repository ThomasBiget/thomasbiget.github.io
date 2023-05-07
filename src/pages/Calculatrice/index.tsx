import { Link } from 'react-router-dom';
import './styles.scss';

function Calculatrice() {
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
          <div className="main__calc-btn--screen">1337</div>
          <div className="main__calc-btn--erase">C</div>
          <div className="main__calc-btn--pad">
            <button className="main__calc-btn--pad-blue" type="button">7</button>
            <button className="main__calc-btn--pad-blue" type="button">8</button>
            <button className="main__calc-btn--pad-blue" type="button">9</button>
            <button className="main__calc-btn--pad-red" type="button">/</button>
            <button className="main__calc-btn--pad-blue" type="button">4</button>
            <button className="main__calc-btn--pad-blue" type="button">5</button>
            <button className="main__calc-btn--pad-blue" type="button">6</button>
            <button className="main__calc-btn--pad-red" type="button">*</button>
            <button className="main__calc-btn--pad-blue" type="button">1</button>
            <button className="main__calc-btn--pad-blue" type="button">2</button>
            <button className="main__calc-btn--pad-blue" type="button">3</button>
            <button className="main__calc-btn--pad-red" type="button">-</button>
            <button className="main__calc-btn--pad-blue" type="button">0</button>
            <button className="main__calc-btn--pad-red" type="button">.</button>
            <button className="main__calc-btn--pad-red" type="button">=</button>
            <button className="main__calc-btn--pad-red" type="button">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculatrice;
