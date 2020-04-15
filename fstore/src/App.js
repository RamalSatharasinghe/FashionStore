import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';


class App extends Component {
    render() {
        return (
            <Router>
           <div className="App">
                <Nav/>
                <Footer/>
           </div>
           </Router>
        );
    }
}

export default App;
