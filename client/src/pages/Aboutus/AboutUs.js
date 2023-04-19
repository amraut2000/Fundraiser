import React from "react";
import "../Aboutus/aboutstyle.css";
import { Link} from "react-router-dom"
export default function aboutUs() {
  return (
    <>
      <div className="main1">
        <h3 className="abtHead">About us</h3>
      </div>
      <section style={{height:"200px"}}>
        <div className="abtbody ">
          <p>
            The fundraiser platform is mainly to raise fund and for to donate
            the fund.
          </p>
          <p>User can request other user's for donation's in crypto currency.</p>
          <p></p>
        </div>
      </section>
      <hr />
      <section>
        <div className="container">
          <h2>Development Team</h2>
          <hr style={{borderBottom:"20px"}}/>
          <div className="dev">
            <li>
              <div className="team">
                <h4>Saurabh Sahare</h4>
                <p>
              
                contact info:
                saharesaurabh76@gmail.com
                    
                </p>
              </div>
            </li>
            <li>
              {" "}
              <div className="team">
                <h4>Ajay Raut</h4>
                <p>
                contact info:
amraut2000@gmail.com
                </p>
              </div>
            </li>
            <li>
              {" "}
              <div className="team">
                <h4>Pranit Chaudhari</h4>
                <p>
                contact info:
                
pranitchaudhari2017@gmail.com
                </p>
              </div>
            </li>
            <li>
              {" "}
              <div className="team">
                <h4>Pravin Warghade</h4>
                <p>
                contact info:
                pwarghade1@gmail.com
                </p>
              </div>
            </li>
          </div>
        </div>
      </section>
    </>
  );
}
