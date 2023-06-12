import { useState } from "react";
export default function Props(props) {
  const numDF = props.num || 0;
  const income_bool = props.fun || null;
  let [num01, setNum] = useState(numDF);
  let [bool, setBool] = useState(true);
//ES6  HOF
    const arr = [1,2,3]
    arr.map((item)=>{ console.log(item);})
    
  return (
    <div style={{width:"100%", display: "flex", justifyContent:"center", height:"10rem",alignItems:"center"}}>
      <div >{num01}</div>
      <div> test</div>
      <button
        onClick={() => {
          setNum(num01 = num01 + 1)
        }}
      >
        {" "}
        +{" "}
      </button>
      <div onClick={()=>{
        setBool(income_bool(bool))
      }}>{`${bool}`}</div>
    </div>
  );
}


