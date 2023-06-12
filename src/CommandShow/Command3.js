import { useState } from "react";

export  default function Command3() {
const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
return(
    <div style={{width:"100%", display: "flex", justifyContent:"center", height:"10rem",alignItems:"center"}}>
      <div >{newArr}</div>
  
    </div>
)
}