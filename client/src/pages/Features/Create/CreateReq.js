import React from "react";
import "./CreateReq.css";
import Create1 from "../../../assets/create-1.jpeg";
import Create2 from "../../../assets/create-2.jpeg";
import Create3 from "../../../assets/create-3.jpeg";
import Create4 from "../../../assets/create-4.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function CreateReq() {
  return (
    <div className="container createReq">
      <ol>
        <li>
          <h2 className="header">Step 1:</h2>
          <div className="create-card">
            <img src={Create1}></img>
            <h5 className="desc">
            Click on the Raise Funds buttons.You can find button on the
              home page.
            </h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 2:</h2>
          <div className="create-card">
            <img src={Create2}></img>
            <h5 className="desc">
            Fill the neccessary details and hit the create button to proceed.</h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 3:</h2>
          <div className="create-card">
            <img src={Create3}></img>
            <h5 className="desc">
            After step 2 the metamask will open.In these the payment request
              will be initiated.Click on the confirm button as shown in above
              image.
            </h5>
          </div>
        </li>
        <li>
          {" "}
          <h2 className="header">Step 4:</h2>
          <div className="create-card">
            <img src={Create4}></img>
            <h5 className="desc">
            The request is created.You can see your request by clicking on
              Raise Funds!.
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
