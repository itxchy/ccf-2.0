# NOTES

### nasty mobile error

* try removing extracttext plugin from the production config. 
  maybe test the dev server in iOS somehow



### Tumblr call stories

* The most recent five Tumblr posts should be displayed

* Each post should have a formatted date

* Each post should have a picture/video thumbnail

* Each post should have a caption

### Component stories

A parent component should call the Tumblr API and store the data in props to
pass to the children.

The child components will render the date and caption the same, but will
render the assets differently according to type. If the asset is a picture,
it will be rendered differently than if its type is a video.
