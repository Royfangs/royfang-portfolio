import React, { Component } from 'react';
import SocialMediaItem from '../../component/SocialMediaItem/SocialMediaItem';
import './SocialMedia.scss';

class SocialMedia extends Component {
  //State for icon and url info
  state = {
    icons: [
      {
        name: 'github',
        url: 'https://github.com/Royfangs'
      }
    ]
  }

  render() {
    return (
      <ul className="SocialMedia">
        <SocialMediaItem mediaIcons={this.state.icons}/>
      </ul>
    );
  }
}

export default SocialMedia;