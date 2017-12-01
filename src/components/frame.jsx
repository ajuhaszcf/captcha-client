import React, { Component } from 'react';
import './frame.css';

import Header from './header';
import Content from './content';
import CTA from './cta';

class Frame extends Component {
  render() {
    let text = 'Skip';
    if (this.props.challenge.images[this.props.set].reduce((acc, image) =>  acc || image.selected, false)) {
      if (this.props.set < this.props.totalSet - 1) {
        text = 'Next';
      }
      else {
        text = 'Verify';
      }
    }
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