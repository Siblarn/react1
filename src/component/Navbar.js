import React from "react"
import logo from '../logo.svg';


export default function Navbar (prop) {
    let text = prop.text || ""
    return (
        <>
        <div id="wer">


            <img src={logo} width="75"  alt="logo" />
            <nav style={{display:"flex",width:"100%",justifyContent:"space-between"}}>airbnb

                {/* <div className="nav1">airbnb</div> */}

            </nav>
        </div>
        </>    
    )
}