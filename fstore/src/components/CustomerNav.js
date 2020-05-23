import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link , withRouter} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import Cart from './Cart'
import Homecom from './home.component';
import ProductL from './RegUser/ProductList';
import { homedir } from 'os';
export class CustomerNav extends Component {
    
    // logOut(e){
    //     e.preventDefault()
    //     localStorage.removeItem('usertoken')
    //     this.props.history.push('/')
    // }
  
    

    // check = () =>{
    //     // console.log(tk);
    //     this.props.checkClick('hii...');
    // }

    render() {
        const{token, logUser} = this.props;
        console.log(token);
        console.log(logUser);
       
        
            const signupLink = (
                <ul className="navbar-nav" style={{marginLeft:"600px"}}>
                    <li className="nav-item">
                        <Link to="/Signup/Signup" className="nav-link">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Signin" className="nav-link">Sign In</Link>
                    </li>
                </ul>
            )
            const signoutLink = (
                <ul className="navbar-nav"  style={{marginLeft:"600px"}}>
                    <li className="nav-item">
                        <a href=""  className="nav-link">
                            {logUser}
                        </a>
                    </li>
                    <li className="nav-item">
                    <Link to="/Home" className="nav-link">Logout</Link>
                    </li>
                   
                </ul>
            )


            return(
               
                 <Router>
                <Switch> 
                <Route path='/Home' exact component={Home}></Route>
                    {/* <Route path='/Signup/Signup' exact component={Signup}></Route> */}
                    {/* <Route path='/Signin' component={Signin}></Route>  */}
                    <div>
                        {/* <h1>{this.props.data.loginToken}</h1> */}
                <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                   
                         <Link to={'/'} className="navbar-brand">FashionHub </Link>
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
                
               
                </div>
              
                <h1></h1>
               {/* <button onClick={this.check}>click</button> */}
                         {token ? signoutLink : signupLink}
                         
                </nav>
                </div>

                </Switch></Router>
            )
           
    }
}

export default CustomerNav