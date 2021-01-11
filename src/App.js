import React from 'react'
import './App.css';

class App extends React.Component {
  
  render(){
    return (
    <div className="App">
    <h1>Learn to code by <br></br> watching others</h1>
    <p>See how other experienced developers solve problems in real time.</p>
    <p>Watching scripted tutorials is great, but understanding how</p>
    <p>developers think is invaluable.</p>
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
    </div>
  );
  }
  
  
}

export default App;
