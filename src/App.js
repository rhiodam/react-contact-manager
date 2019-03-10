import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// import Contact from "./components/Contact";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import LikeDislike from "./components/test/LikeDislike";
import Like from "./components/test/Like";
import Counter from "./components/test/Counter";
import logo from "./logo.svg";
import "./App.css";

import {Provider} from "./context";

// Bootstrap
// import "./bootstrap/dist/css/boostrap.min.css";
// import "bootstrap/dist/css/boostrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import bootstrap from "bootstrap";
import AddContact from "./components/contacts/AddContact";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
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
                        <Header branding="Contact Manager"/>

                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={Contacts}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/contact/add" component={AddContact}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
