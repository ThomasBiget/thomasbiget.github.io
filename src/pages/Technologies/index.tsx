import './styles.scss';
import react from '../../img/logos/logo-react-small.png';
import node from '../../img/logos/nodejs.png';
import postgre from '../../img/logos/postgresql.png';
import sequelize from '../../img/logos/sequelize.png';
import js from '../../img/logos/javascript.png';
import html from '../../img/logos/html.png';
import css from '../../img/logos/css.png';
import git from '../../img/logos/git.png';
import github from '../../img/logos/github.png';
import redux from '../../img/logos/redux.png';

function Technologies() {
  return (
    <div className="main__window">
      <h1>Thomas Biget - Développeur Fullstack - Technologies</h1>
      <div className="main__window-text technologies">
        <p>Voici les principales technologies que j'ai pu rencontrer lors de la réalisation de mes différents projets :</p>
        <ul>
          <li className="technos__li">
            <img className="logos" src={react} alt="" />
            React
          </li>
          <li className="technos__li">
            <img className="logos" src={node} alt="" />
            Node JS
          </li>
          <li className="technos__li">
            <img className="logos" src={postgre} alt="" />
            PostgreSQL
          </li>
          <li className="technos__li">
            <img className="logos" src={sequelize} alt="" />
            Sequelize
          </li>
          <li className="technos__li">
            <img className="logos" src={js} alt="" />
            JavaScript
          </li>
          <li className="technos__li">
            <img className="logos" src={html} alt="" />
            HTML
          </li>
          <li className="technos__li">
            <img className="logos" src={css} alt="" />
            CSS
          </li>
          <li className="technos__li">
            <img className="logos" src={git} alt="" />
            Git
          </li>
          <li className="technos__li">
            <img className="logos" src={github} alt="" />
            GitHub
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Technologies;
