import React, { Component, Fragment } from 'react';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';
class App extends Component{
  render(){
    let numAr = new Array(10);

    for(let i = 0; i<10; i++){
      numAr[i] = random();
      console.log(numAr[i]);
    }
    return (
    <div id="nodeBackground">
  <div className="container">


  <div id="menu">
  Algorithm Visualization
  </div>
  <div id="nodeContainer">
  {numAr.map(function(index, height){
    return(
      <React.Fragment>
    <Node background = "blue" height = {index}/>
    </React.Fragment>
  )
  })}

  </div>
  </div>
</div>


    );
  }
}

export default App;
