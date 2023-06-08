import "./App.css";
import ReactFact from "./pages/FirstReact";
import { Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ReactFact />} />
        <Route path="/reactfacts" element={<ReactFact />} />
        {/* สร้าง components ตรงนี้ CardMao */}
        {/* <Route path="/cardmap" element={<CardMap />} /> */}
      </Routes>
    </div>
  );
}

export default App;
