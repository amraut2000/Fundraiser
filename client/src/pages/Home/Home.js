import React, { useState, useContext, useEffect } from "react"
import "../Home/homeStyle.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import support from "../../assets/support.png"
import history from "../../assets/history.png"
import info from "../../assets/info.png"
import donate from "../../assets/heart.png"
import { Context } from "../../Context"
import  {contractAddress, contractABI} from  "../../utils/constants"

let totalAmt=0;

export default function Home()  {

  const { web3, fundraiserStore } = useContext(Context)

    useEffect(()=>{
      const getTotalAmt= async () => {
        try{
          let fundraiserStore = new web3.eth.Contract(contractABI,contractAddress)
          totalAmt=await fundraiserStore.methods.totalAmt().call()
          //console.log(totalAmt)
        }
        catch(e){
          console.log(e);
        }
      }
      getTotalAmt();
      console.log(totalAmt);
      //console.log("Ajay");
    },)
  
  return(
  <>
    <div className="main">
      <div className="container ">
        <p>
          <h4><b>Total Fund Raised={totalAmt} WEI</b></h4>
        </p>
        <div className="home-content">
          <p className="first">
            Fundraising <span className="second"> Tracking </span>
          </p>
          <h1 className="third">System</h1>
        </div>
      </div>

      <div className="container btn-home" >
        <button className="btn btn-success" style={{}}>
          <Link to={`/browse`} style={{color:"white",display:"flex",marginLeft:"5px"}}> <img src={donate} style={{width:"30px",margin:"4px",height:"30px"}}></img> Want to Donate ?</Link>{" "}
        </button>
        <button className="btn btn-success">
          <Link to={`/create`} style={{color:"white",display:"flex"}}><img src={support} style={{width:"30px",margin:"2px",height:"30px"}}></img> Raise Funds!</Link>{" "}
        </button>
        <button className="btn btn-success">
          <Link to={`/track`} style={{color:"white",display:"flex"}}> <img src={history} style={{width:"30px",margin:"2px",height:"30px"}}></img> Track Your History.</Link>{" "}
        </button>
        <button className="btn btn-success">
          <Link to={`/aboutus`} style={{color:"white",display:"flex"}}> <img src={info} style={{width:"30px",marginRight:"4px",height:"30px"}}></img>About us</Link>{" "}
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

}
