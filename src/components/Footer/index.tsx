import dayjs from 'dayjs';
import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.scss';
import FileOpened from './fileOpened';
import windows from '../../img/windows-0.png';
import time from '../../img/time_and_date-2.png';
import sound from '../../img/loudspeaker_rays-0.png';
import computer from '../../img/computer_explorer_cool-0.png';
import directory from '../../img/directory_closed-4.png';
import application from '../../img/appwizard-5.png';
import contact from '../../img/outlook_express-4.png';

interface FooterProps {
  iconTitle: string;
  setIconTitle: (iconName: string) => void;
}
// on passe la variable iconTitle issue du State afin de changer
// dynamiquement le titre du dossier ouvert dans le footer
function Footer({ iconTitle, setIconTitle }: FooterProps) {
  const hour: string = dayjs().format('HH:mm');
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);

  const handleClickBtn = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleClickMenu = (e: any) => {
    const iconName: string = e.target.title;
    setIconTitle(iconName);
  };
  return (
    <footer className="footer">
      <div className="footer__nav">
        <button type="button" className="footer__nav-start" onClick={handleClickBtn}>
          <img src={windows} alt="logo de windows 98" />
          <p>Démarrer</p>
          {displayMenu && (
          <ul className="footer__nav-start--ul">
            <Link to="/presentation" onClick={handleClickMenu}>
              <li title="Présentation">
                <img src={computer} alt="logo ordinateur windows 98" />
                Présentation
              </li>
            </Link>
            <Link to="/projects" onClick={handleClickMenu}>
              <li title="Mes projets">
                <img src={directory} alt="logo de fichier windows 98" />
                Mes projets
              </li>
            </Link>
            <Link to="/technologies" onClick={handleClickMenu}>
              <li title="Technologies">
                <img src={application} alt="logo plusieurs applications windows 98" />
                Technologies
              </li>
            </Link>
            <Link to="/contact" onClick={handleClickMenu}>
              <li title="Contact">
                <img src={contact} alt="logo Outlook windows 98" />
                Contact
              </li>
            </Link>
          </ul>
          )}
        </button>
        <div className="footer__nav-string" />
        <Routes>
          <Route
            path="/presentation"
            element={<FileOpened iconTitle={iconTitle} />}
          />
          <Route
            path="/projects"
            element={<FileOpened iconTitle={iconTitle} />}
          />
          <Route
            path="/technologies"
            element={<FileOpened iconTitle={iconTitle} />}
          />
          <Route
            path="/contact"
            element={<FileOpened iconTitle={iconTitle} />}
          />
        </Routes>
      </div>
      <div className="footer__hour">
        <div className="footer__hour-string" />
        <div className="footer__hour-hour">
          <img src={time} alt="logo calendrier de windows 98" />
          <img src={sound} alt="logo sound de windows 98" />
          <p>{hour}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
