import React from 'react';
import { Link } from 'react-router';
import Tumblr from './Tumblr';
import UserGist from './Test';

let Home = React.createClass({

  render() {
    return(
      <div>
        <header className="container-heading">
          <div className="header-photo">
            <div className="jumbotron header-jumbotron">
              <h1>Personal Training</h1>
              <p>Take charge of your health.</p>
              <p>Cory Martin can help you define and achieve your fitness goals.</p>
              <p>
                <button className="btn btn-lg btn-primary header-jumbotron-btn">
                  <Link to="/contact">Start training!</Link>
                </button>
              </p>
            </div>
          </div>
        </header>
        <section className="tumblr-embed">
          <h1 className="text-center tumblr-embed-title">Recent Blog Posts</h1>
          <Tumblr />
        </section>

      </div>
    );
  }

});

export default Home;

// <Tumblr postNumber={4} />

// <div className="carousel-caption">
//   <h1>Personal Training</h1>
//   <p>Take charge of your health.</p>
//   <p>Cory Martin can help you define and achieve your fitness goals.</p>
//   <p><button className="btn btn-lg btn-primary"><Link to="/contact">Start training!</Link></button></p>
// </div>
