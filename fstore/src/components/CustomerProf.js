import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios'

import CustomerNav from './CustomerNav'
import Footer from './Footer'
import PList from './RegUser/ProductList'
import Title from "./Title";

export class CustomerProf extends Component {

    constructor(props) {
        super(props);
        this.state = {
            customer:[],
            token:"",
            login:"",
            tEmail:"",
            fName:"",
            lName:"",
            mobile:"",
            email:"",
            password:"",
            usertype:"",
            cDeleteEmail: ""
        };

        this.setFname = this.setFname.bind(this);
        this.setLname = this.setLname.bind(this);
        this.setMobile = this.setMobile.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setDeleteEmail = this.setDeleteEmail.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        // this.updateCustomer = this.updateCustomer.bind(this);
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


    setDeleteEmail(event){
        this.setState({
            cDeleteEmail: event.target.value
        });
    }
    deleteCustomer(event){
        let deleteCusEmail = this.state.cDeleteEmail;
        axios.get('/CustomerProf/delete-customer/' + deleteCusEmail);
        this.setState({
            cDeleteEmail:""
        });
    }
    componentDidMount() {
        let {email} = this.props.match.params;
        let {token} = this.props.match.params;
        console.log(token);
        console.log(email);
         this.handleViewCustomer(email);
         this.handleToken(token);
         this.getToken(token);
         this.getTemail(email);
    }
    

    handleViewCustomer(email) {
        let vEmail = email;
        console.log(vEmail);
        axios.get('/CustomerProf/view-customer/' + vEmail).then((response) => {
            let data = response.data;
            this.setState({
                customer: data
            });
            console.log('data has been received');
            console.log(this.state.customer);
        })
            .catch(() => {
                alert('Error receiving data');
            });
    }

    handleToken(token){
        console.log(token);
        this.setState({
            token:token
        })
    }

    getToken(token){
        let gToken = token;
        console.log(gToken);
        this.setState({
            login:gToken
        })
        
    }

    getTemail(email){
        let tmail = email;
        this.setState({
            tEmail:tmail
        })
    }

    handleLogin(){
        console.log(this.state.login);
        let logStatus = this.state.login;
        let tokenEmail = this.state.tEmail;
        axios.get('/CustomerProf/logged/' + logStatus+ '/' +tokenEmail).then(function(req,res) {

           
        });
    }

    
    render() {
        return (
            <Router>
            <Switch>
            <Route path="/PList" component={PList}></Route>
            <div>
            <CustomerNav token={this.state.token} logUser={this.state.customer.fName}></CustomerNav>
           
            <Title style={{display:"inline", marginLeft:"150px"}} name="Hi..." title={this.state.customer.fName}/>
            <Link to="/PList" className="nav-link" style={{display:"inline", marginLeft:"590px"}}><button  onClick={this.handleLogin} className="btn btn-outline-primary w-auto" >Browse Products</button></Link>
         
            <div className="card bg-light mt-3" style={{width:"600px", marginLeft:"400px"}}>
              <form className="form-signin" action="/CustomerProf/update-customer" method="POST">
                    <h1 className="h3 mb-3 font-weight-normal" style={{ marginLeft:"220px"}}>Account Details</h1>
                    <input type="hidden" name="hide" value={this.state.token}></input>
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">First Name</div>
                    </div>
                    <input type="text" id="inputFname"  name="uFname" onChange={this.setFname}  defaultValue= {this.state.customer.fName} className="form-control" placeholder="First name"  autoFocus></input>
                    </div>
                    
                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Last Name</div>
                    </div>
                    <input type="text" id="inputLname" name="uLname" onChange={this.setLname} defaultValue= {this.state.customer.lName} className="form-control" placeholder="Last name"  autoFocus></input>
                    </div>

                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Mobile</div>
                    </div>
                    <input type="text" id="inputMob" name="uMobile" onChange={this.setMobile} defaultValue= {this.state.customer.mobile} className="form-control" placeholder="+94xxxxxxxxx"  autoFocus></input>
                    </div>

                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Email</div>
                    </div>
                    <input type="email" id="inputEmail1" name="uEmail" onChange={this.setEmail} value={this.state.customer.email} className="form-control" placeholder="Email address"  autoFocus readOnly></input>
                    </div>

                    <div className="input-group mb-2" style={{width:"500px", marginLeft:"50px" }}>
                    <div className="input-group-prepend">
                        <div className="input-group-text">Password</div>
                    </div>
                    <input type="password" id="inputPassword" name="uPassword" onChange={this.setPassword} defaultValue= {this.state.customer.password} className="form-control" placeholder="Password" ></input>
                    </div>

                 <label htmlFor="sel1" >User Type:</label>
                    <select className="form-control" id="sel1" name="uType" onChange={this.setUsertype} value={this.state.customer.usertype} placeholder="User Type" >
                        <option>Customer</option>
                        <option>Admin</option>
                    </select>
               
 
                    <button className="btn btn-md btn-warning "  type="submit" style={{width:"180px", marginLeft:"220px"}} >Update Details</button></form>
                    <label htmlFor="sel1" style={{ marginLeft:"190px"}}>Input your email here to delete the account :</label>
                     <input type="email" id="inputEmail" name="dCusEmail" onChange={this.setDeleteEmail} value={this.state.cDeleteEmail} className="form-control" placeholder="Email address" required autoFocus></input>
                    <button className="btn btn-md btn-danger " onClick={this.deleteCustomer} type="submit" style={{width:"180px", marginLeft:"220px"}}>Delete Account</button>
                    
                    {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}

                    <p className="mt-5 mb-3 text-muted" style={{ marginLeft:"250px"}}>&copy; 2020-2021</p>

                
            </div>
             <Footer></Footer> 
             
            </div>
           </Switch>
           </Router>
        )
    }
}

export default CustomerProf