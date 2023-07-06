import { useState } from "react";
import withReactContent, { SweetAlert2 } from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function logingeiei() {
  
  const navigate = useNavigate();

  const MySwal = withReactContent(Swal);

  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username" : inputs.username,
      "password" : inputs.password,
      "expiresIN": 60000
    })
    

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(" https://www.melivecode.com/api/login", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    console.log(inputs);
    if (result.status === "ok") {
      MySwal.fire({
        html: <i>{result.amessage}</i>,
        icon: "success",
      }).then((value) => {
        navigate('/')
      })
    } else {
      MySwal.fire({
        html: <i>{result.amessage}</i>,
        icon: "ERROR",
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="[password]"
          value={inputs.password || ""}
          onChange={handleChange}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
