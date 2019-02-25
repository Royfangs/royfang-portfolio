import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialMediaItem.scss';

const SocialMediaItem = ({ mediaIcons }) => {
  //Loop through each icons then return <li> and icons
  const icons = mediaIcons.map(icon => {
    return <li className="Media-icon" key={icon.name}><a href={icon.url}><FontAwesomeIcon className={icon.name} icon={['fab', icon.name]} /></a></li>
  });

  return (
    <React.Fragment>
      {icons}
    </React.Fragment>
  );
}

export default SocialMediaItem;