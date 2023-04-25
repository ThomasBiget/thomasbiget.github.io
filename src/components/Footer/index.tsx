import dayjs from 'dayjs';
import './styles.scss';
import windows from '../../img/windows-0.png';
import computerFooter from '../../img/computer_explorer_cool-0.png';
import time from '../../img/time_and_date-2.png';
import sound from '../../img/loudspeaker_rays-0.png';

function Footer({ iconTitle }) {
  const hour: string = dayjs().format('HH:mm');

  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__nav-start">
          <img src={windows} alt="logo de windows 98" />
          <p>Démarrer</p>
        </div>
        <div className="footer__nav-string" />
        <div className="footer__nav-folder">
          <img src={computerFooter} alt="logo ordinateur windows 98" />
          <p>{iconTitle}</p>
        </div>
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
