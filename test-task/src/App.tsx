import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import MainComponent from './components/mainComponent/MainCompanent';

function App() {
  const icons = Object.keys(fas);
  return (
    <div className="container">
      <MainComponent icons={icons}/>
    </div>
  );
}

export default App;
