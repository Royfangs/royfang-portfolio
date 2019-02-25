import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutToolbox.scss';

const AboutToolbox = ({ toolbox }) => {
  //Taking props and create an array of toolbox
  const toolboxItems = Object.keys(toolbox).map(tool => {
    return <li className="About__Toolbox-icon" key={tool}><FontAwesomeIcon className={tool} icon={['fab', toolbox[tool]]} /></li>
  });

  return (
    <React.Fragment>
      <h2 className="About__Sub-heading">Tool box</h2>
      <ul className="About__Toolbox">
        {toolboxItems}
      </ul>
    </React.Fragment>
  );
};

export default AboutToolbox;