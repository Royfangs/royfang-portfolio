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
      nodejs: 'node-js',
      npm: 'npm',
      github: 'github-square'
    }
  }

  render() {
    return (
      <div className="About">
        <div className="About__intro">
          <h1 className="About__heading">About me</h1>
          <div className="About__area">
            <AboutImage />
            <AboutIntro />
          </div>
        </div>
        <div className="About__toolbox">
          <AboutToolbox toolbox={this.state.toolbox}/>
        </div>
      </div>
    );
  }
}

export default About;