import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';
var key = 0;
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
    let argText;
    const nums = {
     nums: ns
   };
    await axios.post(`http://192.168.0.101:6921/insertRedis`, { nums })
    .then(res => {
        console.log(res);
    //    console.log(res.request.responseText);
      })
      await axios.get(`http://192.168.0.101:6921/getRedis`)
      .then(async res => {
          argText = res.request.responseText;
          console.log(argText);
        //  console.log(res.request.responseText);
        })

        this.getRedis(argText);
}

async getRedis(res){
  console.log(res);
    let count = 0;
    let buffer = "";
    for (var i = 0; i < res.length; i++) {
      if(res.charAt(i) == '[' || res.charAt(i) == ']'|| res.charAt(i) == '{' || res.charAt(i) == '}'|| res.charAt(i) == ',' || res.charAt(i) == '|' || res.charAt(i) == ' '){
        continue;
      }
      else {
      //  console.log(this.state.nums[parseInt(res.charAt(i))] + '=' + res.charAt(i+2));
      //  console.log(this.state.nums[parseInt(res.charAt(i+2))]+ '=' + res.charAt(i));
        let holder = this.state.nums[parseInt(res.charAt(i))];
        console.log('Holder is: ' + holder);
        this.state.nums[parseInt(res.charAt(i))] = this.state.nums[parseInt(res.charAt(i+2))];
        this.state.nums[parseInt(res.charAt(i+2))] = holder;
        console.log(holder + "<" + this.state.nums[parseInt(res.charAt(i))]);
        i = i+2;
        key++;
        const sleep = (milliseconds) => {
          return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  await  sleep(100).then(() => {
    this.forceUpdate();
    })

      }
  }
}

  initializeGraph() {
      for(let i = 0; i<10; i++){
        this.state.nums[i] = random();
          console.log(this.state.nums[i]);
      }
      this.insertRedis(this.state.nums);
    }
  render(){
    console.log('here');
    return (
    <div id="nodeBackground">
  <div className="container">


  <div id="menu">
  Algorithm Visualization
  </div>
  <div  key ={key} id="nodeContainer">

  {this.state.nums.map(function(height, index){
    return(
    <React.Fragment key = {index}>
    <Node  background = "blue" height = {height}/>
    </React.Fragment>
  )
  {index++};
  })}

  </div>
  </div>
</div>


    );
  }
}

export default App;
