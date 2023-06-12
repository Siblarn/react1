import { useState } from "react"

export default function TicTacToe(props) {
    const { value } = props;
    const[ticTac,setTicTac] = useState(value);
    const handleValue = (bool) => {
      if (bool) return "X";
      return "O";
     
      
    }

    return(
    
     
      <div style={{
          width:'170px',height:'170px',backgroundColor:'gray',justifyContent:'center',alignItems:'center',display:'flex',border:'25px solid pink',cursor:'pointer',
        }}
        onClick={()=>{
          setTicTac(!ticTac);
    
      }}
      >
        <div style={{fontSize:'60px'}}>
        {" "}
        {handleValue(ticTac)}

   
        
        </div>
   
      </div>
    );
}
  