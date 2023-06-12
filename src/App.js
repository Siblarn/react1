import "./App.css";
import Props from "./pages/component/props";
// import ReactFact from "./pages/FirstReact";
// import { Route, Routes, useParams } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Body2 from "./pages/component/Body2";
// import Card from "./pages/component/Card";
// import Resume from "./Resume";

function App() {
  const toggle = (bool) => {
    return !bool
  };

  return (
    <div className="App">
      <Props num={3} fun={toggle}/>
      <Props num={20} fun={toggle}/>
      {/* <Resume/> */}
      {/* <Navbar /> */}
      {/* <Card/> */}
      {/* <Body2 name='test'/> */}
      {/* <Header/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;

