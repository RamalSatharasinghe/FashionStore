import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Signin from './signin.component';
import Signup from'./signup.component';
import Home from './home.component';
import {ButtonContainer} from './Button'


function Nav() {
    return (
        <Router>
            <div  >

                <div >


                    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                        <Link to={'/home'} className="navbar-brand">FashionHub</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/home'} className="nav-link">Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to={''} className="nav-link">AboutUs</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to={''} className="nav-link">ContactUs</Link>

                                </li>

                            </ul>

                            <span className="navbar-text"> <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/signup'} className="nav-link">SignUp</Link>

                                </li>

                                <li className="nav-item">
                                    <Link to={'/signin'} className="nav-link">Signin</Link>

                                </li>
                            </ul>
    </span>
                        </div></nav>

      <nav className="navbar navbar-light bg-light justify-content-between">
                        <a href={""} className="navbar-brand">Men</a>
                        <a href={""} className="navbar-brand">Women</a>
                        <a href={""}  className="navbar-brand">Kids & Baby</a>
                        <a href={""}  className="navbar-brand">Sportswear</a>


                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                            </button>
                        </form>
                    <Link to={'/signin'}>
                        <ButtonContainer>
                            <span className="mr-2">

                                 <i className="fas fa-cart-arrow-down"/>
                            </span>

                             My Cart
                        </ButtonContainer>
                    </Link>
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path = '/signin' component = {Signin}/>
                <Route exact path = '/signup' component = {Signup}/>
                <Route exact path = '/home' component = {Home}/>

            </Switch>
        </Router>
    )
}


export default Nav