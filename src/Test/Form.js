import axios from "axios";
import React, { useState } from "react";
import { json } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";

function Form(props) {
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState(props.tasks);
  const [inputs, setInputs] = useState({});
  const endpoint = "http://61.7.237.18:747";
  console.log(name);
  const user = localStorage.getItem("user");
  const userParse = JSON.parse(user);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.addTask(name);
    setName("");
  }
  function addTask() {
    const newTask = { id: "id", name, completed: false };
    const raw = JSON.stringify({
      todoName: name,
      ownerId: userParse.data.userId,
      statusChecker: false,
    });
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    // https://2909-2405-9800-bc11-cade-9c61-5e56-40ae-7e88.ngrok-free.app/todolists
    fetch(`${endpoint}/todolists`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "ok") {
          // MySwal.fire({
          //   html: <i>{result.message}</i>,
          //   icon: "success",
          // }).then((value) => {
          //   navigate("/");
          // });
          window.location.reload();
        } else {
          // MySwal.fire({
          //   html: <i>{result.message}</i>,
          //   icon: "error",
          // });
        }

        window.location.reload();
      })
      .catch((error) => console.log("error", error));
  }
  // const endpoint =
  //   "https://2909-2405-9800-bc11-cade-9c61-5e56-40ae-7e88.ngrok-free.app";
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");

  // var raw = JSON.stringify({
  //   todoName: "example work 5",
  //   ownerId: "64e58fe624b650a8b39ef185",
  //   statusChecker: true,
  // });

  // var requestOptions = {
  //   method: "POST",
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: "follow",
  // };
  // // "https://2909-2405-9800-bc11-cade-9c61-5e56-40ae-7e88.ngrok-free.app/todolists"
  // fetch(`${endpoint}/todolists`,requestOptions)
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.log("error", error));

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      /> */}
      <div class="form-group">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={name}
          onChange={handleChange}
          style={{ backgroundColor:"white", color:"#3b1c32"}}
        ></textarea>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" ,margin:"10px 10px"}}>
        <Button
          variant="contained"
          onClick={() => {
            addTask();
          }}
          style={{ backgroundColor:"#8D99AE", color:"#3b1c32", fontWeight:"bold", fontWeight:"800"}}
        >
          ADD
        </Button>
      </div>
    </form>
  );
}

export default Form;