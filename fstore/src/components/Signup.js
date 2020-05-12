import React, { Component } from 'react'
import axios from 'axios'


export class Signup extends Component {

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
    
    render() {
        return (
            <div className="card bg-light" style={{width:"800px", marginLeft:"300px"}}>
              <form className="form-signin" action="/Signup/addSignupUsers" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                
                    <input type="text" id="inputFname" name="uFname" onChange={this.setFname} value={this.state.fName} className="form-control" placeholder="First name" required autoFocus></input>
                    
                    <input type="text" id="inputLname" name="uLname" onChange={this.setLname} value={this.state.lName} className="form-control" placeholder="Last name" required autoFocus></input>
                    
                    <input type="text" id="inputMob" name="uMobile" onChange={this.setMobile} value={this.state.mobile} className="form-control" placeholder="+94xxxxxxxxx" required autoFocus></input>
                    
                    <input type="email" id="inputEmail" name="uEmail" onChange={this.setEmail} value={this.state.email} className="form-control" placeholder="Email address" required autoFocus></input>
                    
                    <input type="password" id="inputPassword" name="uPassword" onChange={this.setPassword} value={this.state.password} className="form-control" placeholder="Password" required></input>
                    <label htmlFor="sel1">User Type:</label>
                    <select className="form-control" id="sel1" name="uType" onChange={this.setUsertype} value={this.state.usertype} placeholder="User Type">
                        <option>Customer</option>
                        <option>Admin</option>
                    </select>
                    <button className="btn btn-lg btn-primary " type="submit" style={{width:"110px"}}>Sign Up</button>
                    
                    {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}

                    <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>

                </form>
            </div>
        )
    }
}

export default Signup
