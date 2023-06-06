import logo from './logo.svg';
import './App.css';
import ShowH1Text from './component/ShowH1Text';

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
        <ShowH1Text text="Reasonsn"/>
            <h2>Reasons I'm excited to learn React</h2>
              <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
              </ol>
        <ShowH1Text text="2021 Ziroll development"/>
              <footer>
                <small>© 2021 Ziroll development. All rights reserved.</small>
              </footer>
      </header>
    </div>
  );
}

export default App;