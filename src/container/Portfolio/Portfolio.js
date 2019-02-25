import React, { Component } from 'react';
import './Portfolio.scss';
import PortfolioProjects from '../../component/PortfolioProjects/PortfolioProjects';
import ExpensifyImage from '../../asset/expensify.png';
import SmartBrainImage from '../../asset/smart-brain.png';
import MtgSearcherImage from '../../asset/mtg-searche.png';
import GraceImage from '../../asset/grace.png';
import NodeShopImage from '../../asset/nodejs-shop-example.png';


class Portfolio extends Component {
  state = {
    projects: {
      grace: {
        name: 'GRACE',
        tools: ['html5', 'css3-alt', 'js'],
        url: 'https://royfangs.github.io/grace/',
        image: GraceImage,
        backgroundPosition: 'Portfolio__card--background-position-top'
      },
      expensify: {
        name: 'Expensify',
        tools: ['js', 'react', 'node-js'],
        url: 'https://expensify-app-1217.herokuapp.com/',
        image: ExpensifyImage,
        backgroundPosition: 'Portfolio__card--background-position-top'
      },
      smartBrain: {
        name: 'Smart-Brain',
        tools: ['js', 'react', 'node-js'],
        url: 'https://face-recognition-appli.herokuapp.com/',
        image: SmartBrainImage,
        backgroundPosition: 'Portfolio__card--background-position-top'
      },
      mtgSearcher: {
        name: 'MTG Searcher',
        tools: ['html5', 'css3-alt', 'js'],
        url: 'https://royfangs.github.io/MTG-searcher/',
        image: MtgSearcherImage,
        backgroundPosition: 'Portfolio__card--background-position-top'
      },
      nodeShop: {
        name: 'Online Shop',
        tools: ['html5', 'css3-alt', 'js', 'node-js'],
        url: 'https://nodejs-shop-example.herokuapp.com/',
        image: NodeShopImage,
        backgroundPosition: 'Portfolio__card--background-position-top'
      }
    }
  }

  render() {
    return (
      <div className="Portfolio">
        <h1 className="Portfolio__heading">Projects</h1>
        <div className="Portfolio__projects">
          <PortfolioProjects projects={this.state.projects}/>
        </div>
      </div>
    );
  }
}

export default Portfolio;