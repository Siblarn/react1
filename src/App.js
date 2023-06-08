import "./App.css";
// import ReactFact from "./pages/FirstReact";
// import { Route, Routes, useParams } from "react-router-dom";
import Navbar from "./component/Navbar";
import Body2 from "./pages/component/Body2";
import Card from "./pages/component/Card";

function App() {
  return (
    <div className="App">

    
      <Navbar />
      <Card/>
      <Body2 name='test'/>
      {/* <Header/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
