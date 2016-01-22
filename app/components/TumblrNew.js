import React, {Component} from 'react';
import { Link } from 'react-router';
import { IntlProvider, FormattedDate } from 'react-intl';

var TumblrNew = React.createClass({

  getInitialState: () => {
    return {
      apiData: [],
      numberOfPosts: 5
    };
  },

  componentDidMount: function() {

    var API_Source = "https://api.tumblr.com/v2/blog/chicityfitness.tumblr.com/posts?api_key=A3dkZ4zIBjapE3IgRD4oO5JZHcwtxfNseZY5YXZm8OpbDKTtz9&callback=?";

    $.getJSON(API_Source, function(result) {
      if(this.isMounted()) {
        let recentPosts = result.response.posts.slice(0, this.state.numberOfPosts);
        // let recentPosts = result.response.posts;
        console.log("recentPosts: " + $.isArray(recentPosts));
        this.setState({
          apiData: recentPosts
        });
      }
    }.bind(this));

  },

  render() {
    console.log("apiData: " + $.isArray(this.state.apiData));


    var posts = this.state.apiData.map((post) => {
      var asset = "undefined";

      if (post.type === "photo") {
        asset = <img className="tumblr-asset" src={post.photos[0].alt_sizes[1].url} />;
        console.log(`photo: ${post.photos[0].alt_sizes[1].url}`);
      }
      if (post.type === "video") {
        asset = <div className="tumblr-asset" dangerouslySetInnerHTML={{__html: post.player[2].embed_code}}></div>;
      }

      return (
      <div key={post.timestamp}>
        <p>
          <FormattedDate
            value={post.date}
            day="numeric"
            month="long"
            year="numeric" />
        </p>
        {asset}
        <div className="tumblr-caption" dangerouslySetInnerHTML={{__html: post.caption}}></div>
      </div>
      );
    });

    return (
      <div>
        {posts}
      </div>
    );
  }

});

export default TumblrNew;

// return (
//   <div>
//     {posts}
//   </div>
// );
