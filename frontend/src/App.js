import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Node from './node/Node.js';
import './App.css';
import random from './logic/generateRandom';
var key = 0;
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nums: [],
      sort: "",
    };
    this.initializeGraph();
  }
async insertRedis(ary, sorty) {
    var ns = ary;
    var nss = sorty;
    let argText;
    const nums = {
     num: ns
   };
   const sorts = {
    sort: nss
  };

    await axios.post(`http://127.0.0.1:6921/insertRedis`, { nums, sorts })
    .then(res => {
        console.log(res);
    //    console.log(res.request.responseText);
      })
      await axios.get(`http://127.0.0.1:6921/getRedis`)
      .then(async res => {
          argText = res.request.responseText;
          console.log(argText);
          console.log(res.request.responseText);
        console.log(this.state.nums);

        })
        this.getRedis(argText);

}

async getRedis(res){
  console.log(res);
    let count = 0;
    let bufferA = "";
    let bufferB = "";
    for (var i = 0; i < res.length; i++) {

      if(res.charAt(i) == '[' || res.charAt(i) == ']'|| res.charAt(i) == '{' || res.charAt(i) == '}'|| res.charAt(i) == ','){
        continue;
      }
      else if(res.charAt(i)=='|'){
        bufferA = bufferB;
        bufferB="";
        continue;
    }
      else if(res.charAt(i)==' '){
        let holder = this.state.nums[parseInt(bufferA)];
        console.log('Holder is: ' + holder);
        this.state.nums[parseInt(bufferA)] = this.state.nums[parseInt(bufferB)];
        this.state.nums[parseInt(bufferB)] = holder;
        console.log(bufferA + "<" + bufferB);
      //  i = i+2;
        key++;
        const sleep = (milliseconds) => {
          return new Promise(resolve => setTimeout(resolve, milliseconds))
        }
        await  sleep(100).then(() => {
          this.forceUpdate();
        })
        bufferA = "";
        bufferB = "";
        continue;
      }

      else{
        bufferB=bufferB + res.charAt(i);
        console.log(bufferB);
      }
      //  console.log(this.state.nums[parseInt(res.charAt(i))] + '=' + res.charAt(i+2));
      //  console.log(this.state.nums[parseInt(res.charAt(i+2))]+ '=' + res.charAt(i));
    } //for loop
    if(bufferB.length>0 && bufferA.length>0){
      let holder = this.state.nums[parseInt(bufferA)];
      console.log('Holder is: ' + holder);
      this.state.nums[parseInt(bufferA)] = this.state.nums[parseInt(bufferB)];
      this.state.nums[parseInt(bufferB)] = holder;
      console.log(bufferA + "<" + bufferB);
    //  i = i+2;
      key++;
      const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      }
      await  sleep(100).then(() => {
        this.forceUpdate();
      })
      bufferA = "";
      bufferB = "";
    }
  }

  initializeGraph() {
      for(let i = 0; i<60; i++){
        this.state.nums[i] = random();
          console.log(this.state.nums[i]);
      }
    //  this.forceUpdate();

    }
  render(){
    console.log('here');
    let genGraph = (e) => {
      e.preventDefault();
      this.initializeGraph();
      this.forceUpdate();
    }
    let bubble = (e) => {
      e.preventDefault();
      this.state.sort = "bubble";
      this.insertRedis(this.state.nums, "bubble");
    }
    let mergey = (e) => {
      e.preventDefault();
      //this.state.sort = "bubble";
      this.insertRedis(this.state.nums, "merge");

    }


    return (
    <div id="nodeBackground">
  <div className="container">


  <div id="menu">
  Algorithm Visualization

  <div className="buttons">
  <div id ="bubbleSort">
<button type="button" onClick={genGraph}>Generate New List</button>
</div>
<div id ="bubbleSort">
<button type="button" onClick={bubble}>Bubble Sort</button>
</div>
  <div id ="mergeSort">
<button type="button" onClick={mergey}>Merge Sort</button>
</div>
  <div id ="bubbleSort">
<button type="button">Heap Sort</button>
</div>
  <div id ="bubbleSort">
<button type="button">Quick Sort</button>
</div>
  <div id ="bubbleSort">
<button type="button">Merge Sort</button>
</div>
  <div id ="bubbleSort">
<button type="button">Counting Sort</button>
</div>
  <div id ="bubbleSort">
<button type="button">Radix Sort</button>
</div>
  <div id ="bubbleSort">
<button type="button">Bucket Sort</button>
</div>
  </div>
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
