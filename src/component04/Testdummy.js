import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Testdummy() {
  const [Testdummy, setTestdummy] = useState({});
  try {
    axios
      .get("https://dummyjson.com/products?limit=5")
      .then(function (Testdummy: any) {
        setTestdummy(Testdummy.data.products);
        // Testdummy.data.products.filter((Testdummy) => Testdummy.data.products != 10)
      })

      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="flex">
      {/* <div>{JSON.stringify(Testdummy)}</div> */}
      {Testdummy.length > 0 &&
        Testdummy.map((item: any) => (
          <div
            className=" mx-3 w-[400px] h-[270px] justify-center items-center rounded-lg p-3 flex-wrap .overflow-auto"
            style={{
              backgroundColor: "#f9f9f9",
              borderTop: "3.5px solid #8c9194",
              borderBottom: "3.5px solid #8c9194",
              display: "flex",
            }}
          >
            <div>
              <div
                className="w-full font-semibold text-lg"
                style={{ borderBottom: "2px solid gray", lineHeight: "65px" }}
              >
                {item.title}
              </div>
              <div
                className="w-full font-semibold text-lg"
                style={{ fontSize: "22px" }}
              >
                {" "}
                {item.price}
              </div>
              <div className="w-full font-semibold text-lg">
                {" "}
                {item.category}
              </div>
              <div className="flex">
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  disabled
                  style={{ marginTop: "10px", marginRight: "10px" }}
                >
                  New User Only
                </button>
                <div className="checkbox03 form-check-label" htmlFor="dropdownCheck">
                  <input type="checkbox" id="test1" />
                  <label htmlFor="test1"></label>
                </div>
              </div>
            </div>
          </div>
        ))}
      {/* <div id="mainContainer">
        <div className="aside">
        <div className="cardview">
        <div className="logo">
        <img
                src="https://image.ibb.co/nN6ZGz/postcard_pc.png"
                alt="profile-sample2"
              />
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
              TiDo Technology Co., Ltd. <br />3 month
            </p>
            <button className="readmore_btn">Read More</button>
          </div>
        </div>
        <div className="footer">
          &copy; SEP 2023 |
          <a
            href="https://www.instagram.com/siblarnthippwan/?hl=th"
            target="_blank"
            className="btn btn-default btn-lg"
          >
            <i className="Me"></i> THIPPAWAN PUTTACHART
          </a>
          -
          <a
            href="https://www.tiktok.com/@sltpw"
            target="_blank"
            className="btn btn-default btn-lg"
          >
            <i className="Project"></i>Written By Siblarn
            <div>Tax ...</div>
          </a>
        </div>
      </div> */}
    </div>
  );
}
