import './styles.scss';
import computerFooter from '../../img/computer_explorer_cool-0.png';

interface FooterProps {
  iconTitle: string;
}

function FileOpened({ iconTitle }: FooterProps) {
  return (
    <div className="footer__nav-folder">
      <img src={computerFooter} alt="logo ordinateur windows 98" />
      <p>{iconTitle}</p>
    </div>
  );
}

export default FileOpened;
