import React from 'react'
import '../Aboutus/style.css'

export default function aboutUs() {
  return (
    <>
    <div className="main">

    {/* <div className='abt-head' style={{borderBottom:"white"}}>
        <h2 className="container abt">About Us.</h2>
       
    </div> */}
    <div className=" abt-main">
      <div className="content">

      <span ><h2 style={{color:"black",marginBottom:"10px",fontSize:"120px"}}>About us</h2></span>
     <p style={{color:"black"}}>
       The Fundraiser platform is mainly for to donate fund. <br /> At the same time user can also make request to other donor's for donation.

      </p>
      </div>
    
    </div>
    </div>
    </>
  )
}