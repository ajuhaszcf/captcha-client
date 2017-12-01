import React, { Component } from 'react';
import './content.css';

import ChallengeButton from './challenge/button';

class ContentFrame extends Component {
  render() {
    const gridSize = Math.sqrt(this.props.challenge.images.length);
    const buttons = this.props.challenge.images.map((image, i) => 
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