import React, { Component } from 'react';

class MouseComponent extends React.Component {

  componentDidMount() {
    require("./hoverEffect.js")
  }
  
  render() {
    return (
      <div className="bar" id="mouse">
        <canvas id="canvas"></canvas>
      </div>
    )
  }
}

export default MouseComponent;