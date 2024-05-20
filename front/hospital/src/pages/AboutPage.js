import AppWrapper from "../containers/AppWrapper";

import "../styles/MainPage.css";
import About from "../styles/images/about.jpg";

const AboutPage = () => {
  return (
    <AppWrapper>
      <div class="main-page">
        <div class="bottom">
          <div>
            <table border="0">
              <tr>
                <td width="700px">
                  <font color="#000">
                    {" "}
                    Welcome to <mark>UK Hospital</mark>{" "}
                  </font>
                  <br />
                  <br />
                  <font color="#000" size="6px">
                    Best Medical & Health care Needs to Our Patients
                  </font>
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  volutpat rutrum eros amet sollicitudin interdum. Suspendisse
                  pulvinar, velit nec pharetra interdum, ante tellus ornare mi,
                  et mollis tellus neque vitae elit. Mauris adipiscing mauris
                  fringilla turpis interdum sed pulvinar nisi malesuada. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  <br />
                  Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                  <br />
                  <br />
                  <br />
                </td>

                <td style={{paddingLeft: 20}}>
                  <img src={About} alt="Hospital" width="400px"/>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="bottom">
          <div>
            <table border="0">
              <tr>
                <td width="700px">
                  <font color="#000">Address </font> <br />
                  <br />
                  <font color="#000" size="6px">
                    UK Hospital & Research Center
                  </font>
                  <br />
                  <br />
                  180, Shri Rampuri, Niwaru Road,
                  <br />
                  Kaal Road <br />
                  Benad, Bharatpur Raj 302020 <br />
                  Contact No - 0123456789 <br />
                  Email: ukh@hospital.com
                  <br />
                  <br />
                  <br />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </AppWrapper>
  );
};

export default AboutPage;
