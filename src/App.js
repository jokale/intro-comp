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
      <p id="purple1">Try it for 7 days</p>
      <p id="purple2">then $20/mo. thereafter</p>
    </div>

    <div id="form">
      <form>
        <input placeholder="   First Name"></input><br></br>
        <br></br> <input placeholder="    Last Name"></input><br></br>
        <br></br><input placeholder="   Email Address"></input><br></br>
        <br></br> <input  type="password"placeholder="   Password"></input><br></br>
       <br></br> <button type="submit">CLAIM YOUR FREE TRIAL</button>
      </form>
      <p id="tc1">By clicking here you are agreeing to our </p>
        <p id="tc2"> Terms and Services </p>
    </div>
    <img src={background} id="background" alt="background" />

    </div>
  );
  }
  
  
}

export default App;
