import React, { Component } from 'react';
import './primary.css';

class PrimaryButton extends Component {
  render() {
    return (
      <div className="cf-primary">
          <button className="cf-captcha-primary-button" onClick={this.props.action}>{this.props.text || 'Done'}</button>
      </div>
    );
  }
}

export default PrimaryButton;