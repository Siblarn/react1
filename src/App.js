import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} width="150" className="App-logo" alt="logo" />
        <h1>Fun Facts About React</h1>
        <ul>
          <li>Was first released in 2013 </li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100K stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Power thousands of enterprise apps, including mobile apps.</li>
        </ul>

      </header>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;