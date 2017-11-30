import React, { Component } from 'react';
import './content.css';

import ChallengeButton from './challenge/button';

class ContentFrame extends Component {
  render() {
    const gridSize = 4;
    const buttons = [];
    for(let i = 0; i < gridSize * gridSize; i += 1) {
      buttons.push(<ChallengeButton gridSize={gridSize} />);
    }
    return (
      <div className="cf-content">
        {buttons}
      </div>
    );
  }
}

export default ContentFrame;