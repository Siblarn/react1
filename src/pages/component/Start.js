import { useState } from "react"
// import TicTacToe from "./pages/component/props";



export default function Start(props) {
    const { value } = props;
    const[Start,setStart] = useState(value);
    const handleValue = (Boolean) => {
        if (Boolean) return "PLAY";
        return "Start";
      
    };
    

    return(
        <div style={{
            width:'9rem',height:'4rem',backgroundColor:'pink',border:'5px solid black', fontSize:'60px',fontWeight:'600',marginLeft:'10rem',color:'gray',lineHeight:'50px',cursor:'pointer',justifyContent:'center',alignItems:'center'
          }}
          onClick={()=>{
            setStart(!Start);
        }}
        >
        <div style={{fontSize:'60px'}}>
        {" "}
        {handleValue(Start)}
        
        </div>

        </div>
      );
} 