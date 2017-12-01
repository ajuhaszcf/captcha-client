import React, { Component } from 'react';
import './content.css';

import ChallengeButton from './challenge/button';

class ContentFrame extends Component {
  render() {
    const imageSet = this.props.challenge.images[this.props.set];
    const gridSize = Math.sqrt(imageSet.length);
    const buttons = imageSet.map((image, i) => 
      <ChallengeButton key={i} gridSize={gridSize} image={image} toggle={this.props.toggle} />
    );
    return (
      <div className="cf-content">
        {buttons}
      </div>
    );
  }
}

export default ContentFrame;