import React from "react";
import "../Create/CreateReq.css";
import History1 from "../../../assets/history-1.png";
import History2 from "../../../assets/history-2.png";
import History3 from "../../../assets/history-3.png";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function BrowseHistory() {
  return (
    <div className="container createReq">
      <ol>
        <li>
          <h2 className="header">Step 1:</h2>
          <div className="create-card">
            <img src={History1}></img>
            <h5 className="desc">Click on the Track Your History.</h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 2:</h2>
          <div className="create-card">
            <img src={History2}></img>
            <h5 className="desc">Enter the account address of your metamask wallet.You can find it on metamask wallet.</h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 3:</h2>
          <div className="create-card">
            <img src={History3}></img>
            <h5 className="desc">
              That's it now you can see all the history of transactions.
            </h5>
          </div>
        </li>
      </ol>
      <Link to={"/features"}>
        <button className="btn btn-success">Back to Features</button>
      </Link>
    </div>
  );
}
