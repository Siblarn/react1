import React, { useEffect, useState } from "react";

export default function Showmem() {
  const user = localStorage.getItem("user");
  const userParse = JSON.parse(user);
  return (
    <div className="btn btn-info disabled">
      <div>{userParse ? `Welcome ${userParse.data.username} ` : ""}</div>
    </div>
  );
}
