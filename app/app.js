import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute, browserHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import ga from 'react-ga';

import Contact from './components/Contact.js';
import MeetCory from './components/MeetCory.js';
import Rates from './components/Rates.js';
import Wellness from './components/Wellness.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

let history = createBrowserHistory();

ga.initialize('UA-77060901-1');

function logPageView() {
  ga.pageview(window.location.pathname);
}

let App = React.createClass({
  render () {
    return (
      <div className="app-container">

        <Navbar />

        {this.props.children}

      </div>
    );
  }
});

let routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/meet-cory" component={MeetCory}/>
    <Route path="/contact" component={Contact}/>
    <Route path="/rates" component={Rates}/>
    <Route path="/wellness" component={Wellness}/>
  </Route>
);

render(<Router 
        history={history} 
        routes={routes} 
        onUpdate={logPageView} 
        />, 
        document.getElementById('react'));
