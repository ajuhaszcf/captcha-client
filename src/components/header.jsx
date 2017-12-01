import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div className="cf-header">
        <div className="cf-header-instruction">Select all squares</div>
        <div className="cf-header-task"><strong>{this.props.task}</strong></div>
        <div className="cf-header-instruction">If there are none, click skip</div>
        
      </div>
    );
  }
}

export default Header;