import './styles.scss';
import { useState } from 'react';
import Window from '../Window';
import Footer from '../Footer';

function App() {
  // State pour le changement dynamique du titre du dossier ouvert dans le footer
  const [iconTitle, setIconTitle] = useState('Bureau');

  return (
    <div className="app">
      <Window setIconTitle={setIconTitle} />
      <Footer iconTitle={iconTitle} />
    </div>
  );
}

export default App;
