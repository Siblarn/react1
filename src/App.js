import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ReactDOM from "react";
import { BrowserRouter, Form, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Category from "./Category";
import Health from "./Product.js/Health";
import Productnew from "./Product.js/Productnew";
import Others from "./Product.js/Others";
import Fashion from "./Product.js/Fashion";
import Mombaby from "./Product.js/Mombaby"
import Food from "./Product.js/Food";
import Mobile from "./Product.js/Mobile";
import Pet from "./Product.js/Pet";
import Audio from "./Product.js/Audio";
import Camera from "./Product.js/Camera";
import Book from "./Product.js/Book";
import Tickets from "./Product.js/Tickets";
import Motocycles from "./Product.js/Motocycles";
import Automobiles from "./Product.js/Automobiles";
import Stationery from "./Product.js/Stationery";
import Hobbies from "./Product.js/Hobbies";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route path="/category" element={<Category/>} />
      <Route path="/health" element={<Health/>} />
      <Route path="/new" element={<Productnew/>} />
      <Route path="/others" element={<Others/>} />
      <Route path="/fashion" element={<Fashion/>} />
      <Route path="/mombaby" element={<Mombaby/>} />
      <Route path="/food" element={<Food/>} />
      <Route path="/mobile" element={<Mobile/>} />
      <Route path="/pet" element={<Pet/>} />
      <Route path="/audio" element={<Audio/>} />
      <Route path="/camera" element={<Camera/>} />
      <Route path="/book" element={<Book/>} />
      <Route path="/tickets" element={<Tickets/>} />
      <Route path="/motocycles" element={<Motocycles/>} />
      <Route path="/automobiles" element={<Automobiles/>} />
      <Route path="/stationery" element={<Stationery/>} />
      <Route path="/hobbies" element={<Hobbies/>} />



      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
