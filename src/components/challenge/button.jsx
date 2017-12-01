import React, { Component } from 'react';
import './button.css';

class ChallengeButton extends Component {
  render() {
    const overlayStyle = {
      width: 400 / this.props.gridSize,
      height: 400 / this.props.gridSize,
    };
    const style = {
      width: '100%',
      height: '100%',
      backgroundImage: `url(/${encodeURIComponent(this.props.image.src)})`,
    }
    if (this.props.image.selected) {
      style.opacity = 0.2;
      overlayStyle.backgroundColor = 'rgba(90, 197, 151, 0.8)';
    }
    return (
      <div className={`cf-challenge-button-overlay ${this.props.image.selected && 'check-overlay'}`} style={overlayStyle} >
        <div className="cf-challenge-button" style={style} onClick={() => this.props.toggle(this.props.image.id)}>
        </div>
      </div>
    );
  }
}

export default ChallengeButton;