import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Home from './components/Home';
import ProductStockM from "./components/ProductStockM";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/admin" component={Admin}/>
                        <Route path="/stock" component={ProductStockM}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
