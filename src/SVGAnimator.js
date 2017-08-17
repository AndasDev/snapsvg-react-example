import React, { Component } from 'react';

//axios for asnyc usage*/
import axios from 'axios';

//Snapsvg-cjs works out of the box with webpack
import Snapsvg from 'snapsvg-cjs';

//import SVGAnim from lib folder located in ./src/ causes warnings even when you
//exclude file from linting.
/* eslint-disable */
//import { SVGAnim } from './lib/SnapSVGAnimator.js';
/* eslint-enable */

//snap.json is located in the public folder, dev-build folder(ugly approach).
let jsonfile = "snap.json";

class SVGAnimator extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: ''
    }
  }
  componentDidMount(){
    axios.get(jsonfile)
      .then(response => {
        this.setState({ data: response.data })
      });
  }

  getSVG(){
    if(this.state.data){
      const container = document.getElementById('container');
      const SVG = new window.SVGAnim(this.state.data, 269, 163, 24)
      container.appendChild(SVG.s.node);
    }
  }

  render() {
    return (
      <div id="container">
        { this.getSVG()}
      </div>
    );
  }
}

export default SVGAnimator;
