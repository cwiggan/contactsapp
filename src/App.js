import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Contacts from './Components/contacts/Contacts';
import Header from './Components/layout/Header';
import About from './Components/pages/About';
import AddContact from "./Components/contacts/AddContact";
import NotFound from "./Components/pages/NotFound";
import Test from "./Components/Test";
import EditContact from "./Components/contacts/EditContact";
import {Provider} from "./context";

class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
              <div className="App">
                <Header branding="Contact Manager" />
                  <div className="container">
                      <div className="row">
                          <div className="col">
                              <Switch>
                                  <Route exact path="/" component={Contacts} />
                                  <Route exact path="/about" component={About} />
                                  <Route exact path="/add" component={AddContact} />
                                  <Route exact path="/edit/:id" component={EditContact} />
                                  <Route path="/test" component={Test} />
                                  <Route component={NotFound} />
                              </Switch>
                          </div>
                      </div>
                  </div>
              </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
