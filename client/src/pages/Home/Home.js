import React from "react";
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

      <div className="container btn-home" >
        <button className="btn btn-info">
          <Link to={`/browse`} style={{color:"black"}}>Want to Donate ?</Link>{" "}
        </button>
        <button className="btn btn-info">
          <Link to={`/create`} style={{color:"black"}}>Raise Funds!</Link>{" "}
        </button>
        <button className="btn btn-info">
          <Link to={`/track`} style={{color:"black"}}>Track Your History.</Link>{" "}
        </button>
        <button className="btn btn-info">
          <Link to={`/aboutus`} style={{color:"black"}}>About us</Link>{" "}
        </button>
        <div className="instr">
         <Link to={'/home-instr'}>
          <buttton className="btn btn-warning " data-bs-toggle="popover" data-bs-content="And here's some amazing content. It's very engaging. Right?">Need Help ?</buttton>
         </Link>

        </div>
      </div>
    </div>
  </>
);

export default Home;
