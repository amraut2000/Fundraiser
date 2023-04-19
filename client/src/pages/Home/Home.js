import React from "react";
import "../Home/homeStyle.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import support from "../../assets/support.png"
import history from "../../assets/history.png"
import info from "../../assets/info.png"
import donate from "../../assets/heart.png"
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
        <button className="btn btn-success">
          <Link to={`/browse`} style={{color:"white"}}> <img src={donate} style={{width:"30px",margin:"2px"}}></img> Want to Donate ?</Link>{" "}
        </button>
        <button className="btn btn-success">
          <Link to={`/create`} style={{color:"white"}}><img src={support} style={{width:"30px",margin:"2px"}}></img> Raise Funds!</Link>{" "}
        </button>
        <button className="btn btn-success">
          <Link to={`/track`} style={{color:"white"}}> <img src={history} style={{width:"30px",margin:"2px"}}></img> Track Your History.</Link>{" "}
        </button>
        <button className="btn btn-success">
          <Link to={`/aboutus`} style={{color:"white"}}> <img src={info} style={{width:"30px",marginRight:"4px"}}></img>About us</Link>{" "}
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
