import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="150" className="App-logo" alt="logo" />
      </header>
      <Header/>
      <Footer/>
      <Navbar/>
    </div>
  );
}

export default App;