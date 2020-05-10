import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';

import Product from './components/Product';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/*<Switch>*/}
                    {/*    <Route exact path="/"  component={Home}></Route>*/}

                    {/*</Switch>*/}
                    <Home/>


                </div>
            </Router>
        );
    }
}

export default App;