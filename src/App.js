//import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title={'Small Lottery'} numBalls={4} maxNum={10}/>
    </div>
  );
}

export default App;
