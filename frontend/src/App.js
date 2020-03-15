import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';

class App extends Component{
    /* Values are hard-coded for this example, it's usually best to bring these in via file or environment variable for production */

  constructor(props){
    super(props);
    this.state = {
      nums: []
    };
    this.initializeGraph();
  }
  async insertRedis(numAr) {
    var ns = this.state.nums;
    const nums = {
     nums: ns
   };
    await axios.post(`http://192.168.0.101:6921/insertRedis`, { nums })
    .then(res => {
        console.log(res);
        console.log(res.request.responseText);
      })
      await axios.get(`http://192.168.0.101:6921/getRedis`)
      .then(res => {
          console.log(res);
          console.log(res.request.responseText);
        })




/*client.on("error", function(error) {
  console.log('here');
  console.error(error);
});*/

//client.set("key", "value", redis.print);
//client.get("key", redis.print);
}


  initializeGraph() {
      for(let i = 0; i<60; i++){
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
