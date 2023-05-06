import logo from "./logo.svg";
import "./App.css";
import Login from "./feature/Login";
import Home from "./feature/Home";
// import { Route } from "react-router";
import { useRoutes } from "react-router-dom";
import { AuthProvider } from "./components/auth";
import routeDirect from "./Router/routeDirect";

function App() {
  const route = useRoutes(routeDirect);

  return (
    <>{route}</>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
