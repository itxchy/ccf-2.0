import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexLink, IndexRoute } from 'react-router';
import { IntlProvider, FormattedDate } from 'react-intl';

import Contact from './components/Contact.js';
import MeetCory from './components/MeetCory.js';
import Rates from './components/Rates.js';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';

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
  </Route>
);

render(
  <IntlProvider locale="en">
    <Router routes={routes}/>
  </IntlProvider>, 
  document.getElementById('react'));
