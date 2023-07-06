import React,{ useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Posteiei = () => {
    const [hasError, setErrors] = useState("false")
    const [user, setuser] = useState({})
    
    useEffect(() => {
       async function fetchData(){ 
            const res = await fetch (" http://61.7.237.18:1150/user/new")
            res
            .json()
            .then (res => setuser(res) )
            .catch(err => setErrors(err));
        }

        fetchData();
    })
        return <div>
        <span> {JSON.stringify(user)} </span>
        <span>{JSON.stringify(hasError)}</span>
       </div>
       
}
    


export default Posteiei;