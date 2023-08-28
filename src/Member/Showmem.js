import React, { useEffect, useState } from "react";

export default function Showmem() {
  const user = localStorage.getItem("user");
  const userParse = JSON.parse(user);

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"start",  border: "0.3px solid black",
    padding: "5px",
    fontFamily: "Ubuntu, sans-serif",
    backgroundColor: "#2B2D42",
    color: "#EDF2F4",
    fontWeight: "bold",
    borderRadius: "10px 10px",
    height:"3.2vh",
    width:"15%",
    marginBottom:"10px"
    }}>
     {userParse && <div style={{paddingLeft:"8px"}}>{userParse.data.username ? `Welcome, ${userParse.data.username} ` : ""}</div>}
    </div>
  );
}