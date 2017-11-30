import React, { Component } from 'react';
import './App.css';
import Frame from './components/frame';
class App extends Component {
  render() {
    return (
      <div className="cf-captcha">
        <Frame />
      </div>
    );
  }
}

export default App;
