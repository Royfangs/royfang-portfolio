import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Navigation from './component/Navigation/Navigation';
import About from './container/About/About';
import Portfolio from './container/Portfolio/Portfolio';
import Contact from './container/Contact/Contact';
import Footer from './component/Footer/Footer';
import './App.scss';

library.add(fab, faUser, faEnvelope);

class App extends Component {
  state = {
    NavigationFixed: false 
  }

  componentDidMount() {
    //Add EventListener when app mounted to check scroll action
    window.addEventListener('scroll', this.NavigationFixed);
  }

  NavigationFixed = () => {
    const scrollLocation = window.scrollY;
    if (scrollLocation >= 80 && this.state.NavigationFixed === false) {
      this.setState(prevState => {
        return {
          NavigationFixed: !prevState.NavigationFixed
        }
      });
    } else if (scrollLocation < 80 && this.state.NavigationFixed === true) {
      this.setState(prevState => {
        return {
          NavigationFixed: !prevState.NavigationFixed
        }
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        {this.state.NavigationFixed ? <Navigation NavigationFixed={this.state.NavigationFixed}/> : null}
        <div className="App">
          <Switch>
            <Route path="/" exact component={About}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
            <Redirect to="/"/>
          </Switch>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
