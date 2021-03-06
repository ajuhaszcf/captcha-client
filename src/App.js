import React, { Component } from 'react';
import * as _ from 'lodash';
import './App.css';
import Frame from './components/frame';
import sendData from './actions/sendData';
import getData from './actions/getData';

class App extends Component {
  constructor(props) {
    super(props);
    const qs = {};
    document.location.search.slice(1).split('&').forEach(e => {
      const arr = e.split('=');
      qs[arr[0]] = arr[1];
    });
    this.state = {
      challenge: null,
      originalChallenge: null,
      set: 0,
      qs,
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
    let thePromise;
    switch (this.state.qs.demo) {
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
        thePromise = getData({ taskid: 2, tasktoken: 'car1' });
        break;

      case '4':
        thePromise = getData({ taskid: 2, tasktoken: 'car1', root: 7 });
        break;

      case '5':
        thePromise = getData({ taskid: 2, tasktoken: 'car1', root: '7.11' });
        break;
      
      case '6':
        thePromise = getData({ 
          taskid: 2, 
          tasktoken: 'car1', 
          root: `${_.sample([5, 6, 7, 8, 10, 11, 12])}`, 
        });
        break;

      case '7':
        thePromise = getData({ 
          taskid: 2, 
          tasktoken: 'car1', 
          root: _.sample(['6.16','7.9','7.10','7.11','7.12','7.13','7.14','7.15','7.16','8.9','8.10','8.13','8.14','8.15','8.16','10.4','11.1','11.2','11.5','11.6','11.7','11.8','11.12','12.4','12.5','12.6','12.7','12.8','12.9','5.5','5.6','5.9','5.10','5.11','5.13','5.14','5.15']),
        });
        break;

      default:
        if (!isNaN(parseInt(this.state.qs.demo, 10))) {
          thePromise = getData({ 
            taskid: 2, 
            tasktoken: 'car1', 
            root: _.sample([
              `${_.sample([5, 6, 7, 8, 10, 11, 12])}`,
              `${_.sample([5, 6, 7, 8, 10, 11, 12])}.${Math.ceil(Math.random() * 12)}`,
              `${_.sample([5, 6, 7, 8, 10, 11, 12])}.${Math.ceil(Math.random() * 12)}`,
              `${_.sample([5, 6, 7, 8, 10, 11, 12])}.${Math.ceil(Math.random() * 12)}`,
              `${_.sample([5, 6, 7, 8, 10, 11, 12])}.${Math.ceil(Math.random() * 12)}`,
            ]), 
          });
        } else {
          thePromise = getData(this.state.qs);
        }
        break;
    }
    thePromise.then(challenge => this.setState({
      challenge: challenge,
      originalChallenge: challenge,
    }))
  }

  verify() {
    if (this.state.set < this.state.challenge.images.length - 1) {
      this.setState({
        set: this.state.set + 1,
      });
      return;
    }
    sendData(this.state.challenge)
      .then((response) => {
        if (this.state.challenge.images.reduce((acc, image) =>  acc || image.selected, false) === false) {
          return;
        }
        if (this.state.qs.demo && parseInt(this.state.qs.demo, 10) < 3)
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
        {this.state.challenge ? <Frame challenge={this.state.challenge} toggle={this.toggleSelection} refresh={this.refresh} verify={this.verify} set={this.state.set} totalSet={this.state.challenge.images.length} /> : null}
      </div>
    );
  }
}

export default App;
