import { useState } from "react";
export default function Hof() {
  const arr = [
    { id: 1, name: "first" },
    { id: 2, name: "jame" },
  ];

  const [state,setState] = useState(true);

  return (
    <div style={{ width: "100%",backgroundColor:"gray",  justifyContent: "center", display: "flex" }}>
    <button onClick={()=>{setState(!state)}}>state</button>
    {state && (<div>First</div>)}
      {arr.map((item) => (
        <div style={{ width:"150px", backgroundColor:"white",margin:5}}>
            <div>{item.id}</div>
            <div >{item.name}</div>
        </div>
      ))}
  
   
    </div>
  );
}
