import React, { Component } from 'react';
import * as _ from 'lodash';
import './App.css';
import Frame from './components/frame';
import sendData from './actions/sendData';
import getData from './actions/getData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge: null,
      originalChallenge: null,
    };
    this.toggleSelection = this.toggleSelection.bind(this);
    this.verify = this.verify.bind(this);
    this.clear = this.clear.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentDidMount() {
    this.refresh();
  }

  toggleSelection(id) {
    const newChallenge = _.cloneDeep(this.state.challenge);
    newChallenge.images = newChallenge.images.map(element => {
      if (element.id === id) {
        element.selected = !element.selected;
      }
      return element;
    });

    this.setState({
      challenge: newChallenge
    });
  }

  refresh() {
    const qs = {};
    document.location.search.slice(1).split('&').forEach(e => {
      const arr = e.split('=');
      qs[arr[0]] = arr[1];
    });
    console.log(qs);
    getData(qs).then(challenge => this.setState({
      challenge: challenge,
      originalChallenge: challenge,
    }))
  }

  verify() {
    sendData(this.state.challenge)
      .then((response) => {
        if (this.state.challenge.images.reduce((acc, image) =>  acc || image.selected, false) === false) {
          return;
        }
        if(response.success) {
          alert('yes!');
        }
        else {
          alert('no');
        }
      })
      .then(() => this.clear())
      .then(() => this.refresh());
    
  }

  clear() {
    this.setState({
      challenge: this.state.originalChallenge,
    })
  }

  render() {
    return (
      <div className="cf-captcha">
        {this.state.challenge ? <Frame challenge={this.state.challenge} toggle={this.toggleSelection} refresh={this.refresh} verify={this.verify} /> : null}
      </div>
    );
  }
}

export default App;
