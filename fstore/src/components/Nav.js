import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Nav() {
    return (
        <Router>
            <div  >

                <div >

                    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                        <Link to={''} className="navbar-brand">FashionHub</Link>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={''} className="nav-link">Home</Link>

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
                                    <Link to={'p'} className="nav-link">SignUp</Link>

                                </li>

                                {/*<li className="nav-item">*/}
                                {/*    <Link to={{ pathname: '/signin' }} className="nav-link">Signin</Link>*/}

                                {/*</li>*/}
                            </ul>
                            </span>
                        </div></nav>

                    {/* <nav className="navbar navbar-light bg-light justify-content-between">
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
    </nav> */}
                    <br />
                </div>
            </div>

            {/*<Switch>*/}
            {/*    <Route path="/signin" component={Signin}></Route>*/}
            {/*</Switch>*/}
        </Router>
    )
}

export default Nav
