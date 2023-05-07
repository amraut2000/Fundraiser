import React, { useState, useContext, useEffect } from "react";
import "../../pages/Instructions/InstStyle.scss";
import "./InstStyle.scss"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Featuresimg from '../../assets/jigsaw.png'
import Question from '../../assets/question.png'
export default function HomeIns() {
  return (
    <>
      <div
        className="container homeIns"
        style={{
          height: "100px",
          width: "100%",
          color: "black",
          fontSize: "28px",
        }}
      >
        <ol style={{ color: "black" }}>
          <li style={{ color: "black" }}>
            1. For using the platform user must have meta mask extension
            installed in his device.If not you can download by using following
            link.
            <a
              target="_blank"
              style={{ color: "blue" }}
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            >
              {" "}
              Meta Mask
            </a>
          </li>
          <li style={{ color: "black" }}>
            2. The Navbar has five buttons i.e{" "}
            <b>
              Home, Want to donate ? , Raise Funds, Track History, About us .
            </b>
          </li>
          <li style={{ color: "black" }}>
            3. For searching the requests and to donate click on{" "}
            <b>want to donate ? </b>
            option.
          </li>
          <li style={{ color: "black" }}>
            4. To send request to for raising fund click on <b>Raise funds!</b>{" "}
            option
          </li>
          <li style={{ color: "black" }}>
            5. User can see his/her past transaction history in{" "}
            <b>Track Your History</b> tab.
          </li>
          <li style={{ color: "black" }}>
            6. You can also donate using mobile Metamask app. Scan the QR code
            from Metamask wallet and donate the amount.
          </li>
        </ol>
        <div className="bottom">
          <Link to="/">
            <button
              className="btn btn-success"
              style={{
                marginTop: "50px",
                height: "50px",
                width: "max-content",
              }}
            >
              Go to Home
            </button>
          </Link>
          <Link to="/features">
            <button
              className="btn btn-success"
              style={{
                marginTop: "50px",
                height: "50px",
                width: "max-content",
              }}
            >
              <img src={Featuresimg} style={{marginTop:"0",display:"inline"}} alt="browse"></img>
              Take A Tour!
            </button>
          </Link>
          <a href="https://support.metamask.io/hc/en-us/articles/360015289452-How-to-create-an-additional-account-in-your-wallet#:~:text=Either%20tap%20the%20account%20icon,the%20account%20to%20change%20it." target="_blank">
          <button className="btn btn-success" style={{
            marginTop: "50px",
            height: "50px",
            width: "max-content",
          }}>
            <img src={Question} style={{marginTop:"0",display:"inline",filter: "invert(0)"}} alt="browse"></img>
              How to create metemask account ?
          </button>
          </a>
        </div>
      </div>
    </>
  );
}
