import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Signup from'./signin.component';

import axios from "axios";

import{

    getFromStorage,
    setInStorage
} from "./storage";

class SigninComponent extends Component {

    constructor(props){
        super(props);

        this.onChangeUserMail = this.onChangeUserMail.bind(this);

        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        //
        // this.onSignin = this.onSignin.bind(this);

        this.State = {

            user_mail : '',

            user_password:''
            // isLoading:true,
            // token:'',
            // signUpError:'',
            // signInError:''

        }
    }

    // componentDidMount() {
    //
    //     const obj = getFromStorage('the-main-app');
    //
    //
    //
    //     if(obj && obj.token){
    //         const {token} = obj;
    //
    //         fetch('/verify?token=' + token)
    //             .then(res => res.json())
    //             .then(json => {
    //                 if (json.success){
    //                     this.setState({
    //                         token,
    //                         isLoading:false
    //                     });
    //                 }else{
    //
    //                     this.setState({
    //
    //                         isLoading:false
    //                     });
    //                 }
    //             });
    //
    //     }else {
    //
    //         this.setState({
    //             isLoading:false,
    //         })
    //     }
    // }

    onChangeUserMail (e){
        this.setState({

            user_mail: e.target.value
        });

    }

    onChangeUserPassword (e){
        this.setState({

            user_password: e.target.value
        });

    }

    // onSignin(){
    //
    //     const {
    //         user_mail,
    //         user_password
    //
    //     }=this.state;
    //
    //     this.setState({
    //         isLoading:true,
    //     })
    //
    //     fetch('/signin',{method:'POST' ,
    //
    //         headers:{
    //         'Content-Type':'application/json'
    //         },
    //         body: JSON.stringify({
    //
    //             user_mail:this.state. user_mail,
    //             user_password: this.state. user_password
    //         }),
    //
    //     })
    //         .then(res =>res.json())
    //         .then(json =>{
    //             if(json.success){
    //                 setInStorage('the-main-app',{token: json.token});
    //                 this.setState({
    //                     signInError: json.message,
    //                     isLoading:false,
    //                     token:json.token
    //
    //                 });
    //             }else{
    //
    //                 this.setState({
    //                     signInError: json.message,
    //                     isLoading:false,
    //                 })
    //             }
    //         });
    // }
    //
    onSubmit(e){

        e.preventDefault();
        const obj = {

            user_mail:this.state. user_mail,

            user_password: this.state. user_password
        };


        axios.post('http://localhost:4001/user/signin',obj).then(res => console.log(res.data));



        //  console.log(`The Values are $(this.state.first_name), $(this.state.last_name),$(this.state.email),$(this.state.password),$(this.state. phone_number)`)

        this.setState({
            user_mail:'',

            user_password:''

        })
    }






    render() {
        //
        // const {
        //      token,
        //     signInError
        // }=this.state;

        // if(isLoading){
        //
        //     return (<div><p>Loading.....</p></div>)
        // }
        //
        // if(!token){

            return (<Router>
                <div>

                    {/*{(signInError) ? (<p>signInError</p>):null}*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div className="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Sign In</h5>
                                        <form className="form-signin">
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control"
                                                       placeholder="Email address" required autoFocus
                                                       value={this.props. user_mail}
                                                       onChange={this.onChangeUserMail}/>
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>

                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" className="form-control"
                                                       placeholder="Password" required
                                                       value={this.props. user_password}
                                                       onChange={this.onChangeUserPassword}/>
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>

                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember
                                                    password</label>
                                            </div>
                                            <button className="btn btn-lg btn-primary btn-block text-uppercase"
                                                    type="submit">Sign in
                                            </button>
                                            <hr className="my-4"/>


                                        </form>
                                        <Link to='/signup'><button className="btn btn-lg btn-facebook btn-block text-uppercase"
                                                                   type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign Up
                                        </button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path = '/signup' component = {Signup}/>



                    </Switch>
                </div></Router>)
        // }
        // return (
        //     <div></div>
        //
        // );




    }
}

export default SigninComponent;