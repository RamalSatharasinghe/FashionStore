import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CustomerProf from './CustomerProf';
// import Nav from './Nav'
import CustomerNav from './CustomerNav'
import Footer from './Footer'
class Signup extends Component {

    constructor(props){
        super(props);
        this.state = {
            fName:"",
            lName:"",
            mobile:"",
            email:"",
            password:"",
            usertype:""
        };
        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setUsertype = this.setUsertype.bind(this);
    }

    setFname(event){
        this.setState({
            fName: event.target.value
        });
    }
    setLname(event){
        this.setState({
            lName: event.target.value
        });
    }
    setMobile(event){
        this.setState({
            mobile: event.target.value
        });
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
    
    handleClick =() =>{
        // alert('Clicked');
        // const history = useHistory();
        // history.push('/Signup/CustomerProf');
    }


    render() {
        return (
            
            <div> 
                <CustomerNav></CustomerNav>{/* <Route path="/Signup/CustomerProf" component={CustomerProf}></Route> */}
            <div className="card bg-light mt-5" style={{width:"600px", marginLeft:"400px"}}>
              <form className="form-signin" action="/Signup/addSignupUsers" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">First Name</div>
                    </div>
                    <input type="text" id="inputFname" name="uFname" onChange={this.setFname} value={this.state.fName} className="form-control" placeholder="First name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Last Name</div>
                    </div>
                    <input type="text" id="inputLname" name="uLname" onChange={this.setLname} value={this.state.lName} className="form-control" placeholder="Last name" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Mobile</div>
                    </div>
                    <input type="text" id="inputMob" name="uMobile" onChange={this.setMobile} value={this.state.mobile} className="form-control" placeholder="+94xxxxxxxxx" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                    </div>
                    <input type="email" id="inputEmail" name="uEmail" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                    </div>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Password</div>
                    </div>
                    <input type="password" id="inputPassword" name="uPassword" onChange={this.setPassword} value={this.state.password} className="form-control" placeholder="Password" required></input>
                    </div>
                    <label htmlFor="sel1">User Type:</label>
                    <select className="form-control" id="sel1" name="uType" onChange={this.setUsertype} value={this.state.usertype} placeholder="User Type">
                        <option>Customer</option>
                        <option>Admin</option>
                    </select>
                    {/* <Link to={{ pathname: '/Signup/CustomerProf' }} ><button className="btn btn-lg btn-primary " type="submit" style={{width:"110px"}}>Sign Up</button></Link> */}
                    <button className="btn btn-lg btn-primary "  type="submit" style={{width:"110px"}}>Sign Up</button>
                    {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}

                    <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p> 

                </form>
            </div>
            
            </div>
           
        )
    }
}

export default Signup;
