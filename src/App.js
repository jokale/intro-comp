import React from 'react'
import './App.css';
import background from './background.png';

class App extends React.Component {
  
  render(){
    return (
    <div className="App">
    <h1 id="h1">Learn to code by <br></br> watching others</h1>
    <p id="main-p">See how other experienced developers solve problems in real time.</p>
    <p id="main-p1"> Watching scripted tutorials is great, but understanding how</p>
    <p id="main-p2">developers think is invaluable.</p>
    <div id="purple">
      <p>Try it for 7 days</p>
      <p>then $20/mo. thereafter</p>
    </div>

    <div id="form">
      <form>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Email Address"></input>
        <input  type="password"placeholder="Password"></input>
      </form>
      <p>By clicking here you are agreeing to our terms and conditions </p>
    </div>
    <img src={background} id="background" alt="background" />

    </div>
  );
  }
  
  
}

export default App;
