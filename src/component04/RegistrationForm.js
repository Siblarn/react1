import React, { useState, setState, useEffect } from "react";
import { getDatabase, set, update } from "firebase/database";
import { hasSpecialCharacters } from "./utils";
import { hasNumber } from "./utils";
import { hasUpperCase } from "./utils";
import { hasLowerCase } from "./utils";
import {
  Link,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';


function RegistrationForm() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    // if (id === "password") {
    //   setPassword(value);
    // }
    // if (id === "confirmPassword") {
    //   setConfirmPassword(value);
    // }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, );
    alert ("Complete");
  };
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);
  const [progressBarStyles, setProgressBarStyles] = useState({
    width: '1%',
    backgroundColor:'transparent'
  });
  const handlePasswordChange = (e) => {
    const {
      target: { value = "" },
    } = e;
    setPassword(value);
  };
  useEffect(() => {
   
      //colculate strength
      //calculate progress bar styles based on strength
      
      // strenth = length + characterType
      // total strength 10
      // 'A@al'
      // 0=>1 =>2 =>3 =>4(max)
    // max strength by tength = 10-4 =>6
    //"asasasasasas => 6"
    //"abcdefghi =>6"
    // min(6,(9/3))
    // min(6,3);
    //3
    //A@al =>6
    //min(6,floor(4/3))
    //min(6,1)
    //1+4 => 5
    const updatedProgressBarStyles = {
        backgroundColor:'red',
        // background_color:'red'
    }
    let totalStrength = 0;
    if (password.length > 3) {
      const strengthByLength = Math.min(6, Math.floor(password.length / 3)); //4,3,2,1 Max6
      let strengthByCharacterType = 0;  
      if (hasNumber.test(password)) {
        strengthByCharacterType += 1;
      }
      if (hasUpperCase.test(password)) {
        strengthByCharacterType += 1;
      }
      if (hasLowerCase.test(password)) {
        strengthByCharacterType += 1;
      }
      if (hasSpecialCharacters.test(password)) {
        strengthByCharacterType += 1;
      }
      totalStrength = strengthByLength + strengthByCharacterType;
    } else {
      totalStrength = 0;
    }
    setStrength(totalStrength); 
    //3=>30%,4=>40%
    updatedProgressBarStyles.width = ''+totalStrength * 10+'%';
    console.log('totalStrength: '+totalStrength);
    if (totalStrength > 8){
        updatedProgressBarStyles.backgroundColor = "green";
    } else if (totalStrength > 6){
        updatedProgressBarStyles.backgroundColor = "orange";
        
    }
    setStrength(totalStrength);
    setProgressBarStyles(updatedProgressBarStyles);
    console.log(updatedProgressBarStyles);
    console.log(progressBarStyles);
  }, [password]);

  return (
    <div className="form">
      <nav class="bg-dark navbar-dark navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h3>Registration</h3>
        </div>
      </nav>
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={firstName}
            onChange={(e) => handleInputChange(e)}
            id="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="lastname">
          <label className="form__label" for="lastName">
            Last Name{" "}
          </label>
          <input
            type="text"
            name=""
            id="lastName"
            value={lastName}
            className="form__input"
            onChange={(e) => handleInputChange(e)}
            placeholder="LastName"
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          {/* <label className="form__label" for="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          /> */}
          {/* <h1>Password strength Checker</h1> */}
          <input type="text" placeholder="Password" value={password} onChange={handlePasswordChange}/>
          <div className="progress-container" >
            <div className="progress-bar" style={{ ...progressBarStyles }} />
            {/* <div className="porgress-bar" style={{ ...progressBarStyles }}>123123</div> */}
        
          </div>
          <p>strength of you password (out of 10) is {strength}</p>
        </div>
        {/* <div className="confirm-password">
          <label className="form__label" for="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div> */}
      </div>
      <div className="footer">
        <button onClick={() => handleSubmit()} type="submit"  className="dd-button btn btn-dark">
          Register
        </button>
        <button onClick={() => navigate(-1)} class="btn btn-primary mx-3">Back to Home Page</button>
      </div>
    </div>
  );
}

export default RegistrationForm;
