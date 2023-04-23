import './styles.scss';
import linkedin from '../../img/logos/linkedin.png';

function Contact() {
  return (
    <div className="main__window">
      <h1>Thomas Biget - Développeur Fullstack - Contact</h1>
      <div className="main__window-text">
        <p>
          <img className="logos" src={linkedin} alt="" />
          <a href="https://www.linkedin.com/in/thomas-biget-8379985b/">Cliquez ici</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
