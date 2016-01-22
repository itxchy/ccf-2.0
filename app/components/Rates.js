import React from 'react';

let Rates = React.createClass({

  render() {
    return(
      <div>
        <div className="ratesHeading">
          <h1>Session Rates</h1>
        </div>


        <div className="ratesContainer">

          <div className="singleSession">
            <h2>Single Session</h2>
              <table className="singleSessionTable">
                <tr>
                    <td>5:30am</td>
                    <td rowspan="4" className="price">$65</td>
                </tr>
                <tr>
                  <td>8:30am</td>
                </tr>
                <tr>
                  <td>5:00pm</td>
                </tr>
                <tr>
                  <td>8:00pm</td>
                </tr>
                <tr>&nbsp;</tr>
              </table>
              <br/><br/>
              <table className="singleSessionTable">
                <tr>
                  <td>8:30am</td>
                  <td rowspan="2" className="price">$55</td>
                </tr>

                <tr>
                  <td>4:30pm</td>
                </tr>
              </table>
          </div>
          <div className="multiSession">
            <table className="multiSessionTable">
              <tr>
                <td><h2>5 Sessions</h2></td>
                <td className="price">$275</td>
              </tr>
              <tr>
                <td colspan="2">$55 per session</td>
              </tr>
              <tr>
                <td><h2>10 Sessions</h2></td>
                <td className="price">$520</td>
              </tr>
              <tr>
                <td>$52 per session</td>
                <td className="terms">1 FREE session if you pay in full,
                  <br/>
                  or 2 payments of $260.
                </td>
              </tr>
              <tr>
                <td><h2>15 Sessions</h2></td>
                <td className="price">$735</td>
              </tr>
              <tr>
                <td>$49 per session</td>
                <td className="terms">1 FREE session if you pay in full,
                  <br/>
                  or 2 payments of $367.
                </td>
              </tr>
              <tr>
                <td><h2>20 Sessions</h2></td>
                <td className="price">$920</td>
              </tr>
              <tr>
                <td>$46 per session</td>
                <td className="terms">2 FREE sessions if you pay in full,
                  <br/>
                  or 3 payments of $306.
                </td>
              </tr>
              <tr>
                <td><h2>25 Sessions</h2></td>
                <td className="price">$1075</td>
              </tr>
              <tr>
                <td>$43 per session</td>
                <td className="terms">2 FREE sessions if you pay in full,
                  <br/>
                  or 3 payments of $358.
                </td>
              </tr>
              <tr>
                <td><h2>30 Sessions</h2></td>
                <td className="price">$1200</td>
              </tr>
              <tr>
                <td>$40 per session</td>
                <td className="terms">3 FREE sessions if you pay in full,
                  <br/>
                  or 3 payments of $400, <br/>
                  or 4 payments of $300.
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }

});

export default Rates;
