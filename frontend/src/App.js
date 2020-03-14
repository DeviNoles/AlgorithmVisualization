import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nums: []
    };
    this.initializeGraph();
  }
  insertRedis(numAr){
    var ns = this.state.nums;
    const nums = {
     nums: ns
   };
    axios.post(`http://localhost:6921/insertRedis`, { nums })
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
}


  initializeGraph() {
      for(let i = 0; i<4; i++){
        this.state.nums[i] = random();
          console.log(this.state.nums[i]);
      }
      this.insertRedis(this.state.nums);
    }
  render(){


    return (
    <div id="nodeBackground">
  <div className="container">


  <div id="menu">
  Algorithm Visualization
  </div>
  <div id="nodeContainer">

  {this.state.nums.map(function(height, index){
    return(
    <React.Fragment key = {index}>
    <Node  background = "blue" height = {height}/>
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
