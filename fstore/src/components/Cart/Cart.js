import React, {Component} from 'react';
import Title from "../Title";
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Signin from "../signin.component";
import ViewWishList from '../ViewWishList';

class Cart extends Component {
    render() {
        return (

            <Router>
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0){

                            return (
                                <React.Fragment>
                                    <Link to={'/wish'}>

                                        <button className="btn btn-outline-primary mt-3 ml-3">View WishList</button>

                                    </Link>

                                    <Title name="your" title="cart"/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history={this.props.history}/>
                                </React.Fragment>


                            );
                        }
                        else{

                           return <EmptyCart/>;

                        }
                    }}
                </ProductConsumer>


            </section>

                <Switch>


                    <Route exact path = "/wish" component = {ViewWishList}/>
                </Switch>

            </Router>
        );
    }
}

export default Cart;