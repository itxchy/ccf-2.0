import React from 'react';
import Home from './Home';
import { Router, Route, Link, IndexLink, IndexRoute } from 'react-router';

let Navbar = React.createClass({
  handleClick: () => {

    let instagramTimeout;
    function delayedProcess() {
      instagramTimeout = window.setTimeout(processEmbeds, 500);
    }
    function processEmbeds() {
      window.instgrm.Embeds.process();
      console.log("click! Delayed! 500");
    }
    delayedProcess();


  },
  render() {
    return(
      <div className="navbar-wrapper">
        <div className="container">
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="/">Chi City Fitness</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                  <li><Link to="/" onClick={this.handleClick}>Home</Link></li>
                  <li><a href="http://chicityfitness.tumblr.com">Blog</a></li>
                  <li><Link to="/meet-cory">Meet Cory</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><button className="btn btn-lg btn-primary action-btn navbar-session-btn"><Link className="navbar-session-btn-link" to="/contact">Schedule a Session!</Link></button></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
});

export default Navbar;
