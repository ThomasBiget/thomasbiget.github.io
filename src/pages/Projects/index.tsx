import { Link } from 'react-router-dom';
import './styles.scss';

function Projects() {
  return (
    <div className="main__window">
      <h1>
        Thomas Biget - Développeur Fullstack - Mes projets
        <Link to="/">
          <span>X</span>
        </Link>
      </h1>
      <div className="main__window-text">
        <p>
          Coming soon...
        </p>
      </div>
    </div>
  );
}

export default Projects;
