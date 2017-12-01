import React, { Component } from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import './content.css';

import ChallengeButton from './challenge/button';

class ContentFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: 0,
      width: 400,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.set < nextProps.set) {
      this.setState({
        transform: this.state.transform === 0 ? 180 : 0,
      });
    }
  }

  componentDidMount() {
    const me = document.querySelector('#content-box');
    this.setState({
      width: me.clientWidth,
    })
  }

  render() {
    const imageSet = this.props.challenge.images[this.props.set];
    const gridSize = Math.sqrt(imageSet.length);
    const buttons = imageSet.map((image, i) => 
      <ChallengeButton totalWidth={this.state.width} key={image.id} gridSize={gridSize} image={image} toggle={this.props.toggle} />
    );
    const style = {
      height: this.state.width + gridSize * 2,
    };
    // {{transform: `rotateY(${this.state.transform}deg)`}}
    return (
      <ReactCSSTransitionReplace
        transitionName="flip" 
        transitionEnterTimeout={1100}
        transitionLeaveTimeout={1100}
      >
        <div id="content-box" style={style} ref={input => {this.myContent = input}} key={this.props.set} className={`cf-content ${this.props.set === 0 ? 'disable-ani' : ''} `} >
          {buttons}
        </div>
      </ReactCSSTransitionReplace>
    );
  }
}

export default ContentFrame;