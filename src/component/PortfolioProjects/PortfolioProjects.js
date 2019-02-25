import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PortfolioProjects.scss';

const PortfolioProjects = ({ projects }) => {
  const projectsArr = Object.keys(projects).map(item => {
    return (
      <div className={`Portfolio__card ${projects[item].backgroundPosition}`} style={{ backgroundImage: `url(${projects[item].image})` }} key={item}>
        <div className="Portfolio__hover-layer">
          <h3 className="Portfolio__subtitle">{projects[item].name}</h3>
          <div className="Portfolio__icon-box">
            {projects[item].tools.map(tool => {
              return <FontAwesomeIcon className={`Portfolio__icon ${tool}`} key={tool} icon={['fab', tool]} />
            })}
          </div>
          <a className="Portfolio__link" href={projects[item].url}>view site</a>
        </div>
      </div>
    );
  });

  return projectsArr;
}

export default PortfolioProjects;