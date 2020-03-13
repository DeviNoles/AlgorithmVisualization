import React, { Component, Fragment } from 'react';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';
class App extends Component{
  render(){

    random();
    return (
    <div id="nodeBackground">
  <div class="container">


  <div id="menu">
  Algorithm Visualization
  </div>
  <div id="nodeContainer">
  <Node background = "blue" height = "20vh"/>
  <Node background = "red" height = "10vh"/>
  <Node background = "yellow" height = "20vh"/>
  <Node background = "black" height = "5vh"/>
  </div>
  </div>
</div>


    );
  }
}


export default App;
