import React, {Component} from 'react';
import men1 from "../images/m1.jpg";
import men2 from "../images/m2.jpg";
import men3 from "../images/m3.jpg";
import {CartContainer} from './Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Details from "./details";
import styled from "styled-components";

class Menswear extends Component {
    constructor(props){
        super(props);
        this.state = {

            // id: 1,
            title1: "Mens Casual Shirt",
            // img: men1,
            price1: 10,
            price2: 11,
            price3: 12,
            inCart1: false,
            inCart2: false,
            inCart3: false
            // ,
            // count: 0,
            // total: 0

        }


    }
    render() {
        // const {id,title,img,price,inCart:{true}} =this.props;
        // let inCart = true;
        return (
            <Router>
            <div >
                <div className="container">
                    <h3>Men</h3><br/>

                    <div className="row">

                        <div className="col">
                            <div className="card">
                                <div className="img-container p-5" onClick={() =>console.log('You clicked me')}>
                                    <Link to={'/details'} >

                                        <img src={men1} alt="product" className="card-img-top"/>
                                    </Link>
                                    {/*<button className="cart-btn"*/}
                                    {/*        onClick={() => {console.log('added to the cart')}}>*/}

                                        {/*<i className="fas fa-cart-plus"/>*/}

                                    <CartContainer  onClick={() => {console.log('added to the cart')}}>

                                        {this.state.inCart1?(<p className="text-capitalize mb-0" disabled>
                                            inCart
                                        </p>):(<i className="fas fa-cart-plus"/>)}
                                        </CartContainer>
                                    {/*</button>*/}


                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">
                                        {this.state.title1}
                                    </p>
                                    <h5 className="text-blue font-italic mb-0">
                                        <span className="mr-1">$</span>
                                        {this.state.price1}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <div className="img-container p-5" onClick={() =>console.log('You clicked me')}>
                                    <Link to={'/details'} >

                                        <img src={men2} alt="product" className="card-img-top"/>
                                    </Link>
                                    <CartContainer  onClick={() => {console.log('added to the cart')}}>

                                        {this.state.inCart2?(<p className="text-capitalize mb-0" disabled>
                                            inCart
                                        </p>):(<i className="fas fa-cart-plus"/>)}
                                    </CartContainer>


                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">
                                        {this.state.title1}
                                    </p>
                                    <h5 className="text-blue font-italic mb-0">
                                        <span className="mr-1">$</span>
                                        {this.state.price2}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">

                            <div className="card">
                                <div className="img-container p-5" onClick={() =>console.log('You clicked me')}>
                                    <Link to={'/details'} >

                                        <img src={men3} alt="product" className="card-img-top"/>
                                    </Link>
                                    <CartContainer  onClick={() => {console.log('added to the cart')}}>

                                        {this.state.inCart3?(<p className="text-capitalize mb-0" disabled>
                                            inCart
                                        </p>):(<i className="fas fa-cart-plus"/>)}
                                    </CartContainer>

                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <p className="align-self-center mb-0">
                                        {this.state.title1}
                                    </p>
                                    <h5 className="text-blue font-italic mb-0">
                                        <span className="mr-1">$</span>
                                        {this.state.price3}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div> <br/>
                </div>

                </div>

                <Switch>

                    <Route exact path = '/details' component = {Details}/>

                </Switch>




            </Router>
        );
    }
}

export default Menswear;

const ProductWrapper = styled.div`

.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(247,247,247);
    
    }
}

`

