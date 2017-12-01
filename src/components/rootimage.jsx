import React, { Component } from 'react';

import './rootimage.css';

class RootImage extends Component {
  render() {
    if (!this.props.challenge.rootImage) return null;
    if (this.props.challenge.scale === 1) return null;
    let styleSheet = document.styleSheets[0];

    let animationName = `animation-zoom-${Math.floor(Math.random()*10000)}`;
    
    let keyframes =
    `@keyframes ${animationName} {
        0% { opacity: 1; transform: scale(1); } 
        90% { opacity: 1; transform: scale(${this.props.challenge.scale}) translate(${this.props.challenge.translate.x / 64.0 * -400}px,${this.props.challenge.translate.y / 64.0 * -400}px); }
        99% { opacity: 0; transform: scale(${this.props.challenge.scale}) translate(${this.props.challenge.translate.x / 64.0 * -400}px,${this.props.challenge.translate.y / 64.0 * -400}px); }
        100% { display: none; opacity: 0; transform: scale(${this.props.challenge.scale}) translate(${this.props.challenge.translate.x / 64.0 * -400}px,${this.props.challenge.translate.y / 64.0 * -400}px); }
    }`;

    let parentAnimationName = `parent-animation-zoom-${Math.floor(Math.random()*10000)}`
    let parentKeyframes =
    `@keyframes goaway {
      0% { visibility: visible; display: initial; } 
      100% { visibility: hidden; display: none; }
    }`;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    styleSheet.insertRule(parentKeyframes, styleSheet.cssRules.length);
    // const transform = {
    //   transform: `scale(${this.props.challenge.scale}) translate(${this.props.challenge.translate.x / 64.0 * -400}px,${this.props.challenge.translate.y / 64.0 * -400}px)`,
    // };
    return (
      <div className="root-image" style={{ animationName: parentAnimationName }} >
        <img alt="big root" key={this.props.challenge.rootImage} src={this.props.challenge.rootImage} style={{ animationName }} /> 
      </div>
    );
  }
}

export default RootImage;