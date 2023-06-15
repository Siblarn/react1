import { useState } from "react"
export default function Object(props) {
    const [Object, setObject] = useState({ X :"", O:"" });
    function ObjectHendle(event) {
      setObject({Object,[event.target.X]: event.target.value,});
    }
    return (
      <div  style={{ fontSize: '20px', fontWeight: '700', justifyContent: 'center', alignContent: 'center', marginLeft: '70rem', color: 'gray' }}>

        <p>Score O: <input type="number" onChange={ObjectHendle} /></p>
        
        <p>Score X: <input type="number" onChange={ObjectHendle} /></p>
   
      </div>
    );
}