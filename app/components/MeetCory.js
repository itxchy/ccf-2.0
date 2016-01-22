import React from 'react';

let MeetCory = React.createClass({

  render() {
    return(
      <div className="container meet-cory">
        <img src={'../images/meetcory.jpg'} alt="Meet Cory Martin" className="img-rounded img-responsive center-block" />
        <div className="textbox">
          <p>Cory Martin was born and raised in Chicago. Throughout his childhood through high school, he remained very active in sports such as hockey and football. It wasn't until the age of 14, when he watched Pumping Iron (A documentary about Arnold Schwarzenegger and the Mr. Olympia bodybuilding competition) that he started becoming enthralled with fitness and nutrition. Little did he know at the time, fitness would become not only a hobby, but an obsession. </p>
          <p>He continued to follow that passion at the University of Iowa--taking exercise physiology classes as his elective courses while majoring in business. Cory graduated with a bachelors degree in finance and economics, and worked in the corporate world for a few short years before realizing he should do what he loves. </p>
          <p>Cory then enrolled in classes at the National Academy of Sports Medicine, and got certified as a personal trainer. Best decision he ever made! He loves watching his clients grow and accomplish their fitness goals and become happy healthy people.</p>
        </div>
      </div>
    );
  }

});

export default MeetCory;
