import { useEffect, useState } from "react"

export default function Testgame(props) {
    const { value, state } = props;
    const [Testgame, setTestgame] = useState(value);
    
    useEffect(()=>{
        setTestgame(Testgame)
      },[props])
      const handleValue = (bool) => {
        if (state !== "idle") {
          if (bool == "x") {
            return "X";
          } else if (bool == "o") {
            return "O";
          } else {
            return "";
          }
        }
        return "Click";
};
    
    return (

        <div style={{
            width: '170px', height: '170px', backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center', display: 'flex', border: '25px solid pink', cursor: 'pointer',
        }}
            onClick={() => {
                // setTestgame(!Testgame);
                // setstart(start);
                if (state) {
                    if (handleValue(Testgame) == "X") {
                        setTestgame("o")
                    } else if (handleValue(Testgame) == "O") {
                        setTestgame("x")
                    } else {
                        setTestgame("x")
                    }
                }
            }}
        >
            <div style={{ fontSize: '60px' }}>

            <div style={{ fontSize: "60px" }}> {handleValue(Testgame)}</div>

            </div>

        </div>

    );
}