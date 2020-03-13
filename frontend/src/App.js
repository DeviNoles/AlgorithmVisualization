import React, { Component, Fragment } from 'react';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';
class App extends Component{
  render(){

    random();
    return (

  <div class="container">

  <div id="menu">
  Algorithm Visualization
  </div>

  <div>
  <Node/>
  </div>
    </div>

    );
  }
}


export default App;
