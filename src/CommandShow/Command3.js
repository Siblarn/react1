import { useState } from "react";

export  default function Command3() {
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');
  console.log(months);
  
return(
    <div style={{width:"100%", display: "flex", justifyContent:"center", height:"10rem",alignItems:"center"}}>
      <div >{months.splice(4, 1, 'May')}</div>
      <div>{console.log(months)}</div>
      
  
    </div>
)
}