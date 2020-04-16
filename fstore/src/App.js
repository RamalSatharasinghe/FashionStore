import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Home from './components/Home';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/admin" component={Admin}></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
