import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Testdummy() {
  const [Testdummy, setTestdummy] = useState({});
  try {
    axios
      .get("https://dummyjson.com/products")
      .then(function (Testdummy: any) {
        setTestdummy(Testdummy.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }

  return (
    <div className=".overflow-auto"> 
      <div id="mainContainer">
      <div className="aside">
        <div className="cardview">
          <div className="logo">
            <img src="https://image.ibb.co/nN6ZGz/postcard_pc.png" alt="profile-sample2" />
          </div>
        </div>
      </div>
      <div id="card-content">
        <div id="header">
          <h2>POSTCARD</h2>
        </div>
        <div id="disc">
          <p>
            intern <br />
            TiDo Technology  Co., Ltd. <br />
            3 month
          </p>
          <button className="readmore_btn">Read More</button>
          
        </div>
      </div>
      <div className="footer">
        &copy; SEP 2023 |
        <a href="https://www.instagram.com/siblarnthippwan/?hl=th" target="_blank" className="btn btn-default btn-lg">
          <i className="Me" ></i> THIPPAWAN PUTTACHART
        </a>
        - 
        <a href="https://www.tiktok.com/@sltpw" target="_blank" className="btn btn-default btn-lg">
          <i className="Project"></i>Written By Siblarn
          <div>Tax ...</div>
        </a>
      </div>
    </div>
      </div>
  );
}
