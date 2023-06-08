import "./App.css";
import ReactFact from "./pages/FirstReact";
import { Route, Routes, useParams } from "react-router-dom";


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Navbar/>
      {/* <Header/> */}
      {/* <Footer/> */}
=======
      <Routes>
        <Route path="/" element={<ReactFact />} />
        <Route path="/reactfacts" element={<ReactFact />} />
        {/* สร้าง components ตรงนี้ CardMao */}
        {/* <Route path="/cardmap" element={<CardMap />} /> */}
      </Routes>
>>>>>>> 489a15083415dcd8c27c76ee89b09c07a00429b3
    </div>
  );
}

export default App;
