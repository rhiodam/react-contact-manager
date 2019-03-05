import React, { Component } from "react";

// import Contact from "./components/Contact";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import LikeDislike from "./components/LikeDislike";
import Like from "./components/Like";
import Counter from "./components/Counter";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "./context";

// Bootstrap
// import "./bootstrap/dist/css/boostrap.min.css";
// import "bootstrap/dist/css/boostrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

          {/* sending branding props to header component */}
          <Header branding="Contact Manager" />
          <LikeDislike/> 
          <Like/>
          <Counter/>
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
