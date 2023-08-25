import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello';
import Hey from './Components/Hey';
import Message from './Components/message';
import Counter from './Components/Counter';


// import greet2 from './Greet'
function App() {
  return (
    <div className="App">
      <Greet/>
      <Welcome/>
      <Hello name = "Dheeraj"/>
      <Hello name = "Intron"/>
      <Hey/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
