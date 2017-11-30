import React, { Component } from 'react';
import './frame.css';

import Header from './header';
import Content from './content';
import CTA from './cta';

class Frame extends Component {
  render() {
    return (
      <div>
        <div className="cf-frame">
          <Header />
          <Content />
          <CTA />
        </div>
      </div>
    );
  }
}

export default Frame;