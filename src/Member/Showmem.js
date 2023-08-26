import React, { useEffect, useState } from "react";

export default function Showmem() {
  const user = localStorage.getItem("user");
  const userParse = JSON.parse(user);

  return (
    <div style={{width:"100%",display:"flex",justifyContent:"start"}}>
     {userParse && <div>{userParse.data.username ? `Welcome, ${userParse.data.username} ` : ""}</div>}
    </div>
  );
}