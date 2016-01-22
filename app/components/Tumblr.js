import React from 'react';
import { Link } from 'react-router';

var Tumblr = React.createClass({

  propTypes: {
    postNumber: React.PropTypes.number
  },

  getInitialState: () => {

    return {
      postType: '',
      postDate: '',
      postTitle: '',
      postCaption: '',
      postAsset: ''
    };
  },

  componentDidMount: function() {
    var API_Source = "https://api.tumblr.com/v2/blog/chicityfitness.tumblr.com/posts?api_key=A3dkZ4zIBjapE3IgRD4oO5JZHcwtxfNseZY5YXZm8OpbDKTtz9&callback=?";
    console.log("api source: ",API_Source);
    $.getJSON(API_Source, function(result) {
      var thisPost = result.response.posts[this.props.postNumber];
      var thisPostType = thisPost.type;

      if(this.isMounted()) {

        this.setState({
          postDate: thisPost.timestamp,
          postCaption: thisPost.caption
        });

        if(thisPostType === "video") {
          this.setState({
            postAsset: thisPost.player[2].embed_code
          });
        }

        if(thisPostType === "photo") {
          this.setState({
            postAsset: thisPost.photos[0].alt_sizes[1].url
          });
        }

        this.setState({
          postDate: thisPost.date
        });

      }


    }.bind(this));
  },
// see this Stack Overflow answer for inserting asset HTML
// http://stackoverflow.com/questions/23616226/insert-html-with-react-variable-statements-jsx
  render() {
    return(
      <div>
        <p>{this.state.postDate} DATE</p>
        <TumblrAsset assetLink="{this.state.postAsset}" />
        <div dangerouslySetInnerHTML={{__html: this.state.postCaption}}>
        </div>
      </div>
    );
  }

});

export default Tumblr;

// <div>
//   <p>{this.state.postDate} DATE</p>
//   <div dangerouslySetInnerHTML={{__html: this.state.postAsset}}>
//   </div>
//   <div dangerouslySetInnerHTML={{__html: this.state.postCaption}}>
//   </div>
// </div>
