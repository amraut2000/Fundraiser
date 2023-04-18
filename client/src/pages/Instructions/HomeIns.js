import React from "react";
import "../../pages/Instructions/InstStyle.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function HomeIns() {
  return (
    <>

      <div className="container homeIns" style={{ height: "100px" ,width:"100%",color:"black" ,fontSize:"28px"}}>
        <ol style={{color:"black"}}>
          <li style={{color:"black"}}>
            1. For using the platform user must have meta mask extension
            installed in his device.If not you can download by using following
            link.
            <a
              style={{ color: "blue" }}
              href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            >
              {" "}
              Meta Mask
            </a>
          </li>
          <li style={{color:"black"}}>
            2. The Navbar has Five buttons i.e Home,Want to donate ? ,Raise
            Funds,Track History,About us .
          </li>
          <li style={{color:"black"}}>
            3. For searching the requests and to donate click on want to donate
            ? option.
          </li>
          <li style={{color:"black"}}>
            4. To send request to for raising fund click on Raise fund option
          </li>
          <li style={{color:"black"}}>
            5. User can see his/her past transaction history in history tab.
          </li>
        </ol>
        <Link to="/">
        <button className="btn btn-success" style={{marginTop:"50px",height:"50px"}}>Go to Home</button>
        </Link> 
      </div>
    </>
  );
}
