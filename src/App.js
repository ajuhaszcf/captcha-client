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
      set: 0,
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
    newChallenge.images[this.state.set] = newChallenge.images[this.state.set].map(element => {
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
    let thePromise;
    switch (qs.demo) {
      case '0':
        thePromise = getData({ taskid: 0 });
        break;

      case '1':
        thePromise = getData({ taskid: 1, tasktoken: 'cell2' });
        break;

      case '2':
        thePromise = getData({ taskid: 1, tasktoken: 'cell2', root: 6 });
        break;

      case '3':
        thePromise = getData({ taskid: 1, tasktoken: 'car1' });
        break;

      case '4':
        thePromise = getData({ taskid: 1, tasktoken: 'car1', root: 7 });
        break;

      case '5':
        thePromise = getData({ taskid: 1, tasktoken: 'car1', root: '7.11' });
        break;

      default:
        thePromise = getData(qs);
        break;
    }
    thePromise.then(challenge => this.setState({
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
      set: 0,
    })
  }

  render() {
    return (
      <div className="cf-captcha">
        {this.state.challenge ? <Frame challenge={this.state.challenge} toggle={this.toggleSelection} refresh={this.refresh} verify={this.verify} set={this.state.set} /> : null}
      </div>
    );
  }
}

export default App;
