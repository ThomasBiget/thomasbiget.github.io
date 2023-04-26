import { Link } from 'react-router-dom';
import './styles.scss';

function Presentation() {
  return (
    <div className="main__window">
      <h1>
        Thomas Biget - Développeur Fullstack - Présentation
        <Link to="/">
          <span>X</span>
        </Link>
      </h1>
      <div className="main__window-text">
        <p>
          Bienvenue sur mon portfolio ! Je m'appelle Thomas,
          j'ai 34 ans et je suis un développeur web passionné basé en Haute-Savoie.
          Mon parcours est plutôt riche, diversifié et atypique, ce qui me permet d'apporter
          une perspective unique à mes projets.
        </p>

        <p>
          Originaire de Paris, j'y ai grandi jusqu'à l'âge de 23 ans.
          Diplômé d'une école de commerce en 2013,
          j'ai suivi mes parents en Haute-Savoie pour lancer
          un projet entrepreneurial.
        </p>
        <p>
          En 2019, fin de l'aventure, je me suis donc tourné du côté du salariat
          et j'ai été recruté en tant que conseiller en assurance pour les professionnels.
          En 2023, j'ai saisi l'opportunité de réaliser
          une reconversion dans le développement web car cela était un rêve
          que je gardais en tête depuis le lycée.
        </p>
        <p>
          Je vous invite maintenant à découvrir mon portfolio.
          N'hésitez pas à me contacter via mon LinkedIn pour échanger.
        </p>
      </div>
    </div>
  );
}

export default Presentation;
