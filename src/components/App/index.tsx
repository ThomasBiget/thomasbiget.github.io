import './styles.scss';
import Window from '../Window';
import Footer from '../Footer';

const date = new Date();
const hour = `${date.getHours()}:${date.getMinutes()}`;

function App() {
  return (
    <div className="app">
      <Window />
      <Footer hour={hour} />
    </div>
  );
}

export default App;
