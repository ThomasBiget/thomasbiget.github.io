import './styles.scss';

interface FooterProps {
  hour: string
}

function Footer({ hour }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div className="footer__nav-start">
          <img src="../../public/img/windows-0.png" alt="logo de windows 98" />
          <p>Démarrer</p>
        </div>
        <div className="footer__nav-string" />
        <div className="footer__nav-folder">
          <img src="../../public/img/computer_explorer_cool-0.png" alt="logo ordinateur windows 98" />
          <p>Présentation</p>
        </div>
      </div>
      <div className="footer__hour">
        <div className="footer__hour-string" />
        <div className="footer__hour-hour">
          <img src="../../public/img/time_and_date-2.png" alt="logo de windows 98" />
          <img src="../../public/img/loudspeaker_rays-0.png" alt="logo de windows 98" />
          <p>{hour}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
