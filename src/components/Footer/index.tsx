import dayjs from 'dayjs';
import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import FileOpened from './fileOpened';
import windows from '../../img/windows-0.png';
import time from '../../img/time_and_date-2.png';
import sound from '../../img/loudspeaker_rays-0.png';

interface FooterProps {
  iconTitle: string;
}
// on passe la variable iconTitle issue du State afin de changer
// dynamiquement le titre du dossier ouvert dans le footer
function Footer({ iconTitle }: FooterProps) {
  const hour: string = dayjs().format('HH:mm');
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__nav-start">
          <img src={windows} alt="logo de windows 98" />
          <p>Démarrer</p>
        </div>
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
