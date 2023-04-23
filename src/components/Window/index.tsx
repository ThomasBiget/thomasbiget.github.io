import {
  Link, Route, Routes, useParams,
} from 'react-router-dom';
import './styles.scss';
import Presentation from '../../pages/Presentation';
import Projects from '../../pages/Projects';
import Technologies from '../../pages/Technologies';
import Contact from '../../pages/Contact';
import computer from '../../img/computer_explorer_cool-0.png';
import directory from '../../img/directory_closed-4.png';
import application from '../../img/appwizard-5.png';
import contact from '../../img/outlook_express-4.png';

function Window() {
  return (
    <main className="main">
      <div className="main__folders">
        <div className="main__folders-item">
          <Link to="/presentation">
            <img src={computer} alt="logo ordinateur windows 98" />
            <p>Présentation</p>
          </Link>
        </div>
        <div className="main__folders-item">
          <Link to="/projects">
            <img src={directory} alt="logo de fichier windows 98" />
            <p>Mes projets</p>
          </Link>
        </div>
        <div className="main__folders-item">
          <Link to="/technologies">
            <img src={application} alt="logo plusieurs applications windows 98" />
            <p>Technologies</p>
          </Link>
        </div>
        <div className="main__folders-item">
          <Link to="/contact">
            <img src={contact} alt="logo Outlook windows 98" />
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <Routes>
        <Route
          path="/presentation"
          element={<Presentation />}
        />
        <Route
          path="/projects"
          element={<Projects />}
        />
        <Route
          path="/technologies"
          element={<Technologies />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </main>
  );
}

export default Window;
