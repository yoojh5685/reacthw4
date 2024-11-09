import logo from './logo.svg';
import './App.css';
import Component1 from './component/Component1';
import Hello from './component/Hello.js';
import Box1 from './component/Box1.js';
import Box2 from './component/Box2';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <p>
        Welcome
      </p>        

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome
        </p>
        <Hello/>
        <Component1/>
        <Box1/>
        <Box2/>
      </header>
    </div>
  );
}

export default App;
