import React from "react";
import "./Features.css";
import Search from "../../assets/searching.png"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Features() {
  return (
    <div className="container feature-div">
      <h2 style={{ fontSize: "100px" }}>Browse Features
      <img style={{height:'100px',display:'inline',marginLeft:' 42px'}} src={Search}></img>
      </h2>
      <ul>
        <li>
          <Link to={'/help-request'}>
            <button className="btn btn-success">
              How to create fund request ?
            </button>
          </Link>
        </li>
        <li>
          <Link to={'/help-donate'}>
            <button className="btn btn-success"> How to donate funds</button>
          </Link>
        </li>
        <li>
          <Link to={'/help-history'}>
            <button className="btn btn-success">How to track History</button>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}
