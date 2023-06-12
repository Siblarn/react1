import "./App.css";
import TicTacToe from "./pages/component/props";
import Start from "./pages/component/Start";

// import Props from "./pages/component/props";
// import ReactFact from "./pages/FirstReact";
// import { Route, Routes, useParams } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Body2 from "./pages/component/Body2";
// import Card from "./pages/component/Card";
// import Resume from "./Resume";
// import Command1 from "./CommandShow/Command1";
// import Command2 from "./CommandShow/Command2";
// import Command3 from "./CommandShow/Command3";


function App() {
  const toggle = (bool) => {
    return !bool
  const Start = (Boolean) =>{
    return !Boolean
  }

  };

  return (

  
    <div className="App">
    <div style={{fontSize:'60px',fontWeight:'700',justifyContent:'center',alignContent:'center',marginLeft:'37rem',color:'gray'}}>TicTacToe</div>
    <div style={{display:'flex'}}>
    <Start value={false}/>
  
    </div>


    <div style={{marginLeft:'25rem'}}>
      <div style={{display:'flex'}}>
      <TicTacToe value={false}/>
      <TicTacToe value={true}/>
      <TicTacToe value={true}/>
      </div>
      <div style={{display:'flex'}}>
      <TicTacToe value={false}/>
      <TicTacToe value={false}/>
      <TicTacToe value={true}/>
      </div>
      <div style={{display:'flex'}}>
      <TicTacToe value={true}/>
      <TicTacToe value={false}/>
      <TicTacToe value={true}/>
      </div>
    </div>

     
   
      
      {/* <Command1/> */}
      {/* <Command2/> */}
      {/* <Command3/> */}
      {/* <Props num={3} fun={toggle}/> */}
      {/* <Props num={20} fun={toggle}/> */}
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
