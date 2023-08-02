import { useState } from "react";
import withReactContent, { SweetAlert2 } from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const MySwal = withReactContent(Swal)
  const [inputs, setInputs] = useState({});
  const [result,setResult] = useState({});
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    if (!value.match(/^([a-z0-9A-Z])+$/i)){
      alert("กรอกได้เฉพาะตัวเลขและตัวอักษรภาษาอังกฤษเท่านั้น");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username" : inputs.username,
      "password" : inputs.password,
    })
    

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://61.7.237.18:1150/auth/login", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(inputs);
    if (result.status === "ok") {
      MySwal.fire({
        html: <i>{result.message}</i>,
        icon: "success",
      }).then((value) => {
        localStorage.setItem("token",result.accessToken)
        navigate('/')
      })
    } else {
      MySwal.fire({
        html: <i>{result.message}</i>,
        icon: "error",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label class="btn btn-outline-dark mx-1">
        Username:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label class="btn btn-outline-dark mx-1">
        Password:
        <input
          type="password"
          name="password"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <input  class="btn btn-outline-success mx-1" type="submit" />
    </form>
  );
}