import React from "react";
import Button from "react-bootstrap/Button";
import "../Home/homeStyle.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Home = () => (
  <>
    <div className="main">
      <div className="container ">
        <div className="home-content">
          <p className="first">
            Small Actions <span className="second">x Lots of People =</span>
          </p>
          <h1 className="third">Big Change</h1>
        </div>
      </div>

      <div className="container btn-home">
        <button className="btn btn-info">
          <Link to={`/browse`}>Want to Donate ?</Link>{" "}
        </button>
        <button className="btn btn-info">
          <Link to={`/create`}>Raise Funds!</Link>{" "}
        </button>
        <button className="btn btn-info">
          <Link to={`/track`}>Track Your History.</Link>{" "}
        </button>
        <button className="btn btn-info">
          <Link to={`/aboutus`}>About us</Link>{" "}
        </button>
        <div className="instr">
          <buttton className="btn btn-warning " data-bs-toggle="popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Need Help ?</buttton>

        </div>
      </div>
    </div>
  </>
);

export default Home;
