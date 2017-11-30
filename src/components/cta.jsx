import React, { Component } from 'react';
import './cta.css';
import PrimaryButton from './cta/primary';
import SecondaryButtons from './cta/secondary';

class CTA extends Component {
  render() {
    return (
      <div className="cf-cta">
        <SecondaryButtons />
        <PrimaryButton />
      </div>
    );
  }
}

export default CTA;