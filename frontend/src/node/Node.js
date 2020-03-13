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
      height: this.props.height, /* edit this for graph height = magic */
      color: this.props.background,
    }
  }
    let ht = this.props.height;
    return (
      <div id="nodeContainer">
      <div style={styles.node}>
      ..
      </div>
      </div>

    )
  }
}

export default Node;
