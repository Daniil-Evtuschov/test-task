import { fas } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import MainComponent from './components/mainComponent/MainCompanent';

export const icons = Object.keys(fas);

function App() {
  return (
    <div className="container">
      <MainComponent icons={icons}/>
    </div>
  );
}

export default App;
