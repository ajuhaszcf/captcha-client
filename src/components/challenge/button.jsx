import React, { Component } from 'react';
import './button.css';

class ChallengeButton extends Component {
  render() {
    const style = {
      width: 400 / this.props.gridSize,
      height: 400 / this.props.gridSize,
    }
    return (
      <button className="cf-challenge-button" style={style}>
      </button>
    );
  }
}

export default ChallengeButton;