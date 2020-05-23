import React, { Component } from 'react';
import './compCss/signin.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomerProf from './CustomerProf';
import Nav from './Nav'
import CustomerNav from './CustomerNav'
import Footer from './Footer'

export class Signin extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:"",
            usertype:""
        };
     
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsertype = this.setUsertype.bind(this);
    }
    setEmail(event){
        this.setState({
            email: event.target.value
        });
    }
    setPassword(event){
        this.setState({
            password: event.target.value
        });
    }
    setUsertype(event){
        this.setState({
            usertype: event.target.value
        });
    }


    render() {
        return (
            <Router>
            <Switch>
            <Route path="/Signin/CustomerProf/:token/:email" component={CustomerProf}></Route>
            <div>
            {/* <Nav></Nav> */}
            <CustomerNav></CustomerNav>
            <div className="card bg-light" style={{width:"600px", marginLeft:"400px", marginTop:"100px"}}>

                <form className="form-signin"action="/Signin/SigninUsers" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal" style={{ marginLeft:"220px"}}>Sign In</h1>
                    
                    <input type="email" id="inputEmail" name="uEmail" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                    
                    <input type="password" id="inputPassword" name="uPassword" onChange={this.setPassword} value={this.state.password} className="form-control" placeholder="Password" required></input>
                    <label htmlFor="sel1">User Type:</label>
                    <select style={{ marginLeft:"220px"}} className="form-control" id="sel1" name="uType" onChange={this.setUsertype} value={this.state.usertype} placeholder="User Type">
                        <option>Customer</option>
                        <option>Admin</option>
                        <option>Store Manager</option>
                    </select>
                    <div>
                    <button className="btn btn-lg btn-primary " type="submit" style={{width:"500px"}}>Sign in</button>
                    {/* <button className="btn btn-lg btn-danger " type="submit" style={{width:"120px"}}>Sign out</button> */}
                    {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}
                    <p>Forgot your password ?</p></div>
                    <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>

                </form>

            </div>
            {/* <Footer></Footer> */}
            </div>
  
            </Switch>
            </Router>

        )
    }
}

export default Signin
