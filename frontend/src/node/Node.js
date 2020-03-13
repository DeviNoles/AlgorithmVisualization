import React, { Component, Fragment } from 'react';
import './Node.css';

class Node extends Component{
  constructor(props) {
    super(props);

  }


  render(){
    const styles = {
    node: {
      background: this.props.background,
      height: this.props.height * 2.5, /* edit this for graph height = magic */
      color: "transparent",
        width: "2vh",
    }
  }
    let ht = this.props.height;
    return (
      <div id="nodeContainer">
      <div style={styles.node}>
      .
      </div>
      </div>

    )
  }
}

export default Node;
