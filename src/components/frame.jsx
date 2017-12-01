import React, { Component } from 'react';
import './frame.css';

import Header from './header';
import Content from './content';
import CTA from './cta';

class Frame extends Component {
  render() {
    const text = this.props.challenge.images[this.props.set].reduce((acc, image) =>  acc || image.selected, false) ? 'Verify' : 'Skip';
    return (
      <div>
        <div className="cf-frame">
          <Header task={this.props.challenge.task} />
          <Content challenge={this.props.challenge} toggle={this.props.toggle} set={this.props.set} />
          <CTA text={text} verify={this.props.verify} refresh={this.props.refresh} />
        </div>
      </div>
    );
  }
}

export default Frame;