import React, { Component } from 'react';
import './cta.css';
import PrimaryButton from './cta/primary';
import SecondaryButtons from './cta/secondary';

class CTA extends Component {
  render() {
    return (
      <div className="cf-cta">
        <SecondaryButtons refresh={this.props.refresh} />
        <PrimaryButton text={this.props.text} action={this.props.verify} />
      </div>
    );
  }
}

export default CTA;