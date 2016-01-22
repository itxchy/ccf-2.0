import React from 'react';

let TumblrAsset = React.createClass({

  // propTypes: {
  //   assetType: React.propTypes.any.isRequired,
  //   assetContent: React.propTypes.any.isRequired
  // },

  render() {

    let asset = "undefined";
    console.log("this.props.assetType" + this.props.assetType);

    if (this.props.assetType === "photo") {
      asset = <img src="{this.props.assetContent}" />;

    }

    if (this.props.assetType === "video") {
      asset = <div dangerouslySetInnerHTML={{__html: this.props.assetContent}}></div>;
    }
    window.instgrm.Embeds.process();
    return (
      <div>
        <h1>CONTENT</h1>
      {asset}
      </div>
    );
  }

});

export default TumblrAsset;
