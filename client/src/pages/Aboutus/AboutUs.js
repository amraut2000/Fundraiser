import React from "react";
import "../Aboutus/aboutstyle.css";
import linkedin from "../../assets/linkedin.png";
import mail from "../../assets/gmail.png";

export default function aboutUs() {
  return (
    <>
      <div className="main1">
        <h3 className="abtHead">About Us</h3>
      </div>
      <section style={{ height: "200px" }}>
        <div className="abtbody ">
          <p>
            The fundraiser platform is mainly to raise fund and for to donate
            the fund.
          </p>
          <p>
            User can request other user's for donation's in crypto currency.
          </p>
          <p></p>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <div className="guide">
            <h2 style={{ marginBottom: "20px" }}>Guided By</h2>
            <div className="team commonstyle">
              <h4>Prof.S.S.Shevtekar</h4>
            </div>
          </div>
          <hr style={{width:" -webkit-fill-available"}}/>
          <h2>Development Team</h2>
          <hr style={{ borderBottom: "20px" }} />
          <div className="dev">
            <li>
              <div className="team">
                <h4>Saurabh Sahare</h4>
                <p className="commonstyle">Connect Us</p>
                <p className="commonstyle">saharesaurabh76@gmail.com</p>
                <div className="social-img">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/saurabh-sahare-540764191/"
                  >
                    <img
                      className="linkedin-img"
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  {/* <a href="mailto:saharesaurabh76@gmail.com" target="_blank">
                    <img className="linkedin-img" src={mail} alt="gmail" />
                  </a> */}
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div className="team">
                <h4>Ajay Raut</h4>
                <p className="commonstyle">Connect Us</p>
                <p className="commonstyle">amraut2000@gmail.com</p>
                <div className="social-img">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/ajay-raut-1b324018b/"
                  >
                    <img
                      className="linkedin-img"
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  {/* <img className="linkedin-img" src={mail} alt="gmail" /> */}
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div className="team">
                <h4>Pranit Chaudhari</h4>
                <p className="commonstyle">Connect Us</p>
                <p className="commonstyle">pranitchaudhari2017@gmail.com</p>
                <div className="social-img">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pranit-chaudhari-117183209/"
                  >
                    <img
                      className="linkedin-img"
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  {/* <img className="linkedin-img" src={mail} alt="gmail" /> */}
                </div>
              </div>
            </li>
            <li>
              {" "}
              <div className="team">
                <h4>Pravin Warghade</h4>
                <p className="commonstyle">Connect Us</p>
                <p className="commonstyle">pwarghade1@gmail.com</p>
                <div className="social-img">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/pravin-warghade-559773200/"
                  >
                    <img
                      className="linkedin-img"
                      src={linkedin}
                      alt="linkedin"
                    />
                  </a>
                  {/* <img className="linkedin-img" src={mail} alt="gmail" /> */}
                </div>
              </div>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
