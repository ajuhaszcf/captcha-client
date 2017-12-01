import React, { Component } from 'react';
import './secondary.css';

class SecondaryButtons extends Component {
  render() {
    return (
      <div className="cf-secondary">
        <div className="button-list">
          <button className="cf-captcha-button" id="reload" onClick={this.props.refresh} ></button>
        </div>
      </div>
    );
  }
}

export default SecondaryButtons;