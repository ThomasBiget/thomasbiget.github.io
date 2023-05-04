import { Link } from 'react-router-dom';
import './styles.scss';

function Projects() {
  return (
    <div className="main__window">
      <h1>
        Thomas Biget - Développeur Fullstack - Mes projets
        <Link to="/">
          <span>X</span>
        </Link>
      </h1>
      <div className="main__window-text">
        <h2># Mon portfolio</h2>
        <p>
          Et oui, mon portfolio, c&apos;est un peu la vitrine de &ldquo;mon magasin&rdquo;.
          C&apos;est pour cette raison que je souhaitais quelque chose qui me ressemble,
          un clin d&apos;oeil à ce qui m&apos;a poussé à devenir développeur.
          {' '}
          <br />
          J&apos;ai choisi le thème &ldquo;Windows 98&rdquo; car il me rappelle
          l&apos;époque où je suis devenu
          un fan d&apos;informatique et de gaming. L&apos;histoire
          a fait que je me suis écarté de cette voie,
          mais c&apos;était pour mieux y revenir aujourd&apos;hui.
          {' '}
          <br />
          Mon portfolio sera en constante en évolution et j&apos;y ajouterai de nouvelles
          fonctionnalités petit à petit.
        </p>
        {' '}
        <br />
        <p />
        <div className="ui divider" />
        <h2># Mon parcours RSE (en cours...)</h2>
        <p>
          Projet en cours sur un sujet qui me tient à coeur : la RSE.
          Cela fait 3 ans que je m&apos;intéresse à ce sujet et
          qui est, pour moi, central aujourd&apos;hui. Nous vivons une époque où
          l&apos;urgence climatique prend une place de plus en plus importante
          dans notre société. Le mot urgence n&apos;est pas anondin car effectivement
          &ldquo;il y a le feu au lac&rdquo;.
          {' '}
          <br />
          Nous avons tous un rôle à jouer dans ce défi planétaire, dirigeant, politique,
          citoyen, ainsi que les entreprises.
          {' '}
          <br />
          D&apos;autres sujets centraux comme le bien-être des salariés,
          la parité homme-femme au travail,
          le respect des droits de l&apos;homme... ont pris une place importante dans
          les problématiques des entreprises.
          Ces dernières ont un rôle centrale dans nos société et la RSE permet
          de prendre en comptes
          les enjeux sociétaux et environnementaux dans leur stratégie globale.
          Beaucoup de barrières, parfois psychologiques, empêchent ou ralentissent
          la mise en place d&apos;une stratégie RSE
          au sein des entreprises.
          {' '}
          <br />
          Mon parcours RSE aura pour vocation à informer les entreprises sur la RSE et à faire
          tomber les barrières qui les empêches de mettre en place leur démarche.
        </p>
      </div>
    </div>
  );
}

export default Projects;
