import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from './components/home.component'
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
// import Product from './components/Product';
import Modal from "./components/Modal";
import  Home from './components/Home';
class App extends Component {
    render() {
        return (
            <React.Fragment>
                {/*<div className="App">*/}

                <Home/>
                    <Switch>
                        {/*<Route exact path="/"  component={Home}></Route>*/}


                        {/*<Route exact path='/details' component={Details}/>*/}
                        <Route  exact path="/plist" component={ProductList}/>
                        <Route exact path="/cart1" component={Cart}/>

                    </Switch>

                <Modal/>

                {/*</div>*/}
            </React.Fragment>
        );
    }
}

export default App;