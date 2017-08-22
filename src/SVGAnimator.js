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

class SVGAnimator extends Component {

  componentDidMount(){
    axios.get(this.props.jsonfile)
      .then(response => {
        this.getSVG(response.data)
      });
  }

  getSVG(svgData){
    if(svgData){
      const SVG = new window.SVGAnim(svgData, this.props.width, this.props.height, this.props.framerate)
      this.svgContainer.appendChild(SVG.s.node);
    }
  }

  render() {
    return (
      <div ref={(container) => { this.svgContainer = container; }} />
    );
  }
}

export default SVGAnimator;
