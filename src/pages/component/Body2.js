import React from "react"
import S from '../../Image/S.png';

export default function Body2 (prop) {
    const text = prop.text || ""
    return (
        <div>
            <div className="redstar" style={{display:"flex",width:"100%",justifyContent:"start"}}>
                    <div className="Star"><img src={S} width="28" alt="text"></img></div>
                    <div className ="h1">5.0</div>
                    <div className="USA" style={{fontWeight:'normal',display:"flex",justifyContent:'start'}}>(6) •USA</div>
                {/* <div className="usa">•USA </div>  */}
            </div>

            <div className="h2">Life Lessons with Katie</div>
            <div>Zaferes</div>
            <div className="spaces">.</div>

        <div className="from" style={{display:'flex'}}>
            <div className="spaces">.</div>
            <div className="h3">From $136 /</div>
            <div className="sp">..</div>
            <div>person</div>
            <h3>{text}</h3>
        </div>
              
        </div>
        
    )
}