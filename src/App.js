import React, { Component } from 'react';
import SVGAnimator from './SVGAnimator';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      Some text before SVG
      <SVGAnimator/>
      Some text after SVG
      </div>
    )
  }
}

export default App;
