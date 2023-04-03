import './styles.scss';

function Window() {
  return (
    <main className="main">
      <div className="main__folders">
        <div className="main__folders-item">
          <img src="../../public/img/computer_explorer_cool-0.png" alt="logo ordinateur windows 98" />
          <p>Présentation</p>
        </div>
        <div className="main__folders-item">
          <img src="../../public/img/directory_closed-4.png" alt="logo de fichier windows 98" />
          <p>Mes projets</p>
        </div>
        <div className="main__folders-item">
          <img src="../../public/img/appwizard-5.png" alt="logo plusieurs applications windows 98" />
          <p>Technologies</p>
        </div>
        <div className="main__folders-item">
          <img src="../../public/img/outlook_express-4.png" alt="logo Outlook windows 98" />
          <p>Contacts</p>
        </div>
      </div>
      <div className="main__description">
        <h1>Thomas Biget - Développeur Web Fullstack</h1>
        <div className="main__description-text">
          <p>
            to voluptatibus porro veritatis illum molestias repudiandae unde et aperiam dolor
            corrupti repellendus excepturfffi suscipit laborum aut quod? Labore, molestiae iste!

          </p>
        </div>
      </div>
    </main>
  );
}

export default Window;
