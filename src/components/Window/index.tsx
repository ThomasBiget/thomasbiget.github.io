import { Link, Route, Routes } from 'react-router-dom';
import './styles.scss';
import Presentation from '../../pages/Presentation';
import Projects from '../../pages/Projects';
import Technologies from '../../pages/Technologies';
import Contact from '../../pages/Contact';

function Window() {
  return (
    <main className="main">
      <div className="main__folders">
        <div className="main__folders-item">
          <Link to="/presentation">
            <img src="../../public/img/computer_explorer_cool-0.png" alt="logo ordinateur windows 98" />
            <p>Présentation</p>
          </Link>
        </div>
        <div className="main__folders-item">
          <Link to="/projects">
            <img src="../../public/img/directory_closed-4.png" alt="logo de fichier windows 98" />
            <p>Mes projets</p>
          </Link>
        </div>
        <div className="main__folders-item">
          <Link to="/technologies">
            <img src="../../public/img/appwizard-5.png" alt="logo plusieurs applications windows 98" />
            <p>Technologies</p>
          </Link>
        </div>
        <div className="main__folders-item">
          <Link to="/contact">
            <img src="../../public/img/outlook_express-4.png" alt="logo Outlook windows 98" />
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
