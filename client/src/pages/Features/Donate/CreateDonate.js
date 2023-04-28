import React from 'react'
import '../Create/CreateReq.css'
import Donate1 from "../../../assets/donate-1.png";
import Donate2 from "../../../assets/donate-2.png";
import Donate3 from "../../../assets/donate-3.png";
import Donate4 from "../../../assets/donate-4.png";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
export default function CreateDonate() {
  return (
    <div className="container createReq">
      <ol>
        <li>
          <h2 className="header">Step 1:</h2>
          <div className="create-card">
            <img src={Donate1}></img>
            <h5 className="desc">
              Click on the want to donate?
            </h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 2:</h2>
          <div className="create-card">
            <img src={Donate2}></img>
            <h5 className="desc">
              Click on the donate for further process.
            </h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 3:</h2>
          <div className="create-card">
            <img src={Donate3}></img>
            <h5 className="desc">
              Enter the amount of donations you want to donate in the text area and hit donate.
              If you want to donate with smart phone.Then use metamask app to can QR code and donate.If you dont have app then click on the link to install <span>  <a style={{fontWeight:"500px"}} href="https://play.google.com/store/apps/details?id=io.metamask&hl=en&gl=US">MetaMask</a>.</span>
            </h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 4:</h2>
          <div className="create-card">
            <img src={Donate4}></img>
            <h5 className="desc">
              The request is generated click on the confirm button in the metamask as shown in above image.
            </h5>
          </div>
        </li>
      </ol>
      <Link to={"/features"}>
        <button className="btn btn-success">Back to Features</button>
      </Link>
    </div>
  )
}
