import { useState } from "react";
import { ReactDOM } from "react";
import withReactContent, { SweetAlert2 } from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { json, useNavigate } from "react-router-dom";



function Registereiei() {
  const [inputs, setInputs] = useState({});
  const MySwal = withReactContent(Swal)
  const [navigate, setNavigate] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      username: inputs.username,
      password: inputs.password,
      userProfile: {
        firstName: inputs.fname,
        lastName: inputs.lname,
        gender: inputs.gender,
        birthDate: inputs.birthDate,
        imageUrl: inputs.imageUrl,
      },
      userPhone: {
        phoneCode: inputs.phoneCode,
        phoneNumber: inputs.phoneNumber,
      },
      userConfigs: {
        moblieApp: {},
        webApp: {
          language: inputs.language,
          news_modal: inputs.news_modal,
        },
      },
      userRoles: inputs.userRoles,
      isVerified: inputs.isVerified,
      email: inputs.email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://61.7.237.18:1150/user/new", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "success",
          }).then((value) => {
            navigate("/");
          });
        } else {
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: "error",
          });
        }
        console.log(result);
        
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>
      Username :
      <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      Password :
      <input
        type="text"
        name="password"
        value={inputs.password || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      FirstName :
      <input
        type="text"
        name="fname"
        value={inputs.fname || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      LastName :
      <input
        type="text"
        name="lname"
        value={inputs.lname || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      Gender :
      <input
        type="text"
        name="gender"
        value={inputs.gender || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      BirthDate :
      <input
        type="text"
        name="birthDate"
        value={inputs.birthDate || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      ImageUrl :
      <input
        type="text"
        name="imageUrl"
        value={inputs.imageUrl || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      PhoneCode :
      <input
        type="text"
        name="phoneCode"
        value={inputs.phoneCode || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      PhoneNumber :
      <input
        type="text"
        name="phoneNumber"
        value={inputs.phoneNumber || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      Language :
      <input
        type="text"
        name="language"
        value={inputs.language || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      News_modal :
      <input
        type="text"
        name="news_modal"
        value={inputs.news_modal || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      UserRoles :
      <input
        type="text"
        name="userRoles"
        value={inputs.userRoles || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      IsVerified :
      <input
        type="text"
        name="isVerified"
        value={inputs.isVerified || ""}
        onChange={handleChange}
        />
    </label>
    <label>
      Email :
      <input
        type="text"
        name="email"
        value={inputs.email || ""}
        onChange={handleChange}
        />
    </label>
    <input type="submit"/>
  </form>
);
}
export default Registereiei;
