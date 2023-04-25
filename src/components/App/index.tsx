import './styles.scss';
import { useState } from 'react';
import Window from '../Window';
import Footer from '../Footer';

function App() {
  const [iconTitle, setIconTitle] = useState('Bureau');

  const windowTitle = () => {

  };
  return (
    <div className="app">
      <Window setIconTitle={setIconTitle} />
      <Footer iconTitle={iconTitle} />
    </div>
  );
}

export default App;
