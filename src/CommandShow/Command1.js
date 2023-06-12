import { useState } from "react";

export default function Command1() {

const array1 = ['1', '2', '3'];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}
return(
    <div style={{width:"100%", display: "flex", justifyContent:"center", height:"10rem",alignItems:"center"}}>
      <div >{array1}</div>
  
    </div>
)
}