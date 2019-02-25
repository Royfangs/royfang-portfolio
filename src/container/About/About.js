import React, { Component } from 'react';
import AboutIntro from '../../component/About/AboutIntro/AboutIntro';
import AboutImage from '../../component/About/AboutImage/AboutImage';
import AboutToolbox from '../../component/About/AboutToolbox/AboutToolbox';
import './About.scss';

class About extends Component {
  state = {
    toolbox: {
      html5: 'html5',
      css3: 'css3-alt',
      js: 'js',
      react: 'react',
      nodejs: 'node-js'
    }
  }

  render() {
    return (
      <div className="About">
        <h1 className="About__heading">About me</h1>
        <div className="About__area">
          <AboutImage />
          <AboutIntro />
        </div>
        <AboutToolbox toolbox={this.state.toolbox}/>
      </div>
    );
  }
}

export default About;