import React, { useState, useEffect } from "react";
import axios  from "axios";

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
    <div>
      <div>Header semi font</div>
      <div>{JSON.stringify(Testdummy)}</div>

      <div>Post Text</div>
      <div>Tax_ _ _</div>
    </div>
  );
}
