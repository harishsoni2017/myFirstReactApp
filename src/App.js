import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App container">

       <center>
        <filedset>
            <legend className="myIn">Input Box</legend>
            <label><p>Name<input type="text" className="form-control" /></p></label>
            <hr className="myIn"/>
            <button className="btn btn-danger">Submit</button>
        </filedset>
       </center>
      </div>

    );
  }
}

export default App;
