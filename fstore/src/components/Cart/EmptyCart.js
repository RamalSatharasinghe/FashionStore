import React, {Component} from 'react';
// import {Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ViewWishList from "../ViewWishList";
export default function EmptyCart() {

        return (
            <Router>
            <div className="container mt-5">
                <div className="row">
                   < Link to={'/wish'}>

                    <button className="btn btn-outline-primary mt-3 ml-3">View WishList</button>

                </Link>
                    <div className="col-10 mx-auto text-center text-title">
                        <h1>your cart is currently empty</h1>
                    </div>
                </div>
            </div>

                <Switch>

                    <Route exact path = "/wish" component = {ViewWishList}/>
                </Switch>


            </Router>
        );

}

