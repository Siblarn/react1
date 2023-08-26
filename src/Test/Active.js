import React, { useState } from "react";
import axios from "axios";

export default function Active(props) {
  const baseURL = "http://61.7.237.18:747/todolists/findList/handler";
  // {{local}}/todolists/findList/handler/{{ID ของคนที่จะหาว่ารับงานอะไรไปบ้าง}}
  let user = localStorage.getItem("user");
  const json_user = JSON.parse(user);
  const [isUserLogin, setIsUserLogin] = useState(json_user ? true : false);
  console.log();
  function handleSubmit(e) {
    e.preventDefault();
  }

  const [todo, setTodo] = useState(null);
  if (todo == null) {
    axios.get(`${baseURL}/${json_user.data.userId}`).then((response) => {
      setTodo(response.data);
      // setTodo(response.data));
      console.log(response.data);
    });
  }
  const UserUpdate = async (todo) => {
    var data = {
      statusChecker: true,
      status: "PENDING_REVIEW",
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

  return (
    <div>
      <div>
        ♥ Received Work!
        <div>
          <div className="todo stack-small">
            {todo &&
              todo.map((todo) => (
                <div
                  className="list-group"
                  key={todo._id}
                  style={{
                    border: "1px solid gray",
                    borderRadius: "20px",
                    display: "flex",
                    padding: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    backgroundColor: "white",
                    marginTop: "8px",
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
                  <div>{todo.status}</div>
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
                  {/* {todo.status === "active"  && (
  <div><div style={{}}>
      DUE TO : {calculateTimeAgo(todo.scheduledAt)}
    </div>
  </div>
)} */}

                  <div
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-around",
                    }}
                  >
                    {todo.status === "active" && (
                      <>
                        <button
                          type="submit"
                          style={{
                            backgroundColor: "#a4d4b4",
                            color: "#3b1c32",
                            fontWeight: "bold",
                            borderRadius: "10px 10px",
                          }}
                          onClick={() => {
                            UserUpdate(todo._id);
                            console.log(todo.statusChecker);
                          }}
                        >
                          Submit
                        </button>
                        <button
                          type="submit"
                          style={{
                            backgroundColor: "#ef8787",
                            color: "#3b1c32",
                            fontWeight: "bold",
                            borderRadius: "10px 10px",
                          }}
                        >
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
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
      </div>
    </div>
  );
}
