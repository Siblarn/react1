import { useState } from "react";

export  default function Command2() {

const animals = ['pigs', 'deer', 'sheep'];

const count = animals.push('cows');
console.log(count);

console.log(animals);


animals.push('chickens', 'cats', 'dogs');
console.log(animals);

return(
    <div style={{width:"100%", display: "flex", justifyContent:"center", height:"10rem",alignItems:"center"}}>
      <div >{animals}</div>
  
    </div>
)
}