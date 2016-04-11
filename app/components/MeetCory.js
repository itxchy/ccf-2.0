import React from 'react';

let MeetCory = React.createClass({

  render() {
    return(
      <div className="container meet-cory">
        <img src={'app/images/meetcory.jpg'} alt="Meet Cory Martin" className="img-rounded img-responsive center-block" />
        <div className="textbox">
          <p>
            Cory Martin was born and raised in Chicago. Starting at a very young age, 
            he started becoming interested in the science behind movement and nutrition. 
            As he grew up, this interest became a hobby, and later this hobby became a 
            passion. He continued to follow that passion at the University of Iowa--taking 
            exercise physiology classes as his elective courses while majoring in business. 
            Cory graduated with a bachelors degree in finance, and worked in the corporate 
            world for a few short years before realizing he should do what he loves. With 
            the passion and an unquenchable thirst for more knowledge in regards to health 
            and wellness, he enrolled in classes at the National Academy of Sports Medicine, 
            and got certified as a personal trainer.
          </p>
        </div>
      </div>
    );
  }

});

export default MeetCory;
