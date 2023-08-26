import { useState, useEffect } from "react";
import axios from "axios";
import FilterButton from "./FilterButton";
import Form from "./Form";
import Showmem from "../Member/Showmem";
import { margin } from "@mui/system";
// import ReactDOM from "react";
// import Todolist from "./Todolist";

export default function Testfinal() {
  const [todo, setTodo] = useState(null);
  let user = localStorage.getItem("user");
  const json_user = JSON.parse(user);
  const [isUserLogin, setIsUserLogin] = useState(json_user ? true : false);
  const [formattedDate, setFormattedDate] = useState("");
  const [tododelete, setTodoelete] = useState(null);
  const endpoint = "http://61.7.237.18:747";
  const baseURL = "http://61.7.237.18:747/todolists";
  if (todo == null) {
    axios.get(baseURL).then((response) => {
      setTodo(response.data.reverse());
      setTodo(response.data.filter((todo) => todo.statusChecker != true));
      console.log(response.data);
    });
  }

  if (!todo) return null;

  const TodolistDelete = async (todo) => {
    // fetch(`${endpoint}/_id`, requestOptions)
    try {
      const response = await fetch(`http://61.7.237.18:747/todolists/${todo}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        console.log("success");
        window.location.reload();
      } else {
        console.error("error");
      }
    } catch (error) {
      console.error("error", error);
    }
  };
  const UserUpdate = async (todo) => {
    var data = {
      statusChecker: true,
      caseHandler: json_user.data.userId,
    };
    await fetch(`http://61.7.237.18:747/todolists/${todo}`, {
      method: "PATCH",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      window.location.reload();
    });
  };

  const calculateFormattedDate = (date) => {
    const givenDate = new Date(date);
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return givenDate.toLocaleString("en-US", options);
  };

  const calculateTimeAgo = (date) => {
    const currentDate = new Date();
    const givenDate = new Date(date);
    const timeDifference = givenDate - currentDate;
    const daysAgo = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    if (daysAgo === 0) {
      return "today";
    } else if (daysAgo <= 0) {
      return "late";
    } else {
      return `In ${daysAgo} days `;
    }
  };

  return (
    <div className="todoapp stack-large">
      <Showmem />
      <Form />
      <div className="filters btn-group stack-exception">
        <FilterButton />
      </div>
      <h2 className="list-heading">Work List !</h2>
      <div className="todo stack-small" key={todo._id}>
        {todo.map((todo) => (
          <div
            className="list-group"
            key={todo._id}
            style={{
              marginTop:"10px",
              border: "1px solid gray",
              borderRadius: "20px",
              backgroundColor:"white",
              display: "flex",
              padding: "10px", 
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
              marginBottom: "10px",
              width: "100%", 
            }}
          >
            <div
              style={{
                display: "flex",
                borderBottom: "0.5px solid gray",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "start",
                padding: "5px 3px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    marginRight: "15px",
                    fontSize: "16px",
                    width: "20px",
                  }}
                  checked={todo.statusChecker}
                  onClick={() => {
                    UserUpdate(todo._id);
                    console.log(todo.statusChecker);
                  }}
                />

                <div
                  style={{
                    marginRight: "5px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {todo.todoName}
                </div>
              </div>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
                onClick={() => TodolistDelete(todo._id)}
                style={{ display: "flex" }}
              ></button>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                padding: "5px 8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "start",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                OWNER : {todo.ownerId.substring(todo.ownerId.length - 4)}
              </div>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "end",
                  fontSize: "13px",
                  color: "gray",
                }}
              >
                {calculateFormattedDate(todo.createdAt)}
              </div>
            </div>

            {/* <div>{todo.createdAt}</div> */}
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                alignContent: "center",
                height: "20px",
                marginTop: "15px",
                fontSize: "13px",
              }}
            >
              <div style={{}}>{"DUE TO : "}</div>
              {calculateTimeAgo(todo.scheduledAt)}
            </div>
            <div>{todo.statusChecker}</div>
            <div>{todo.caseHandler}</div>
          </div>
        ))}
        {/* <div className="list-group" key={todo._id}>
            <div>{todo.todoName}</div>
            <div> owner : ชื่อปลอม </div>
            <div>{todo._id}</div>
            <div>{todo.ownerId}</div>
            <div>{todo.statusChecker}</div>
            <div>{todo.createdAt}</div>
            <div>{todo.updatedAt}</div>
          </div> */}
      </div>
    </div>
  );
}