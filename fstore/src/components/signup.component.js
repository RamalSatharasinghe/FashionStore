import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import axios from 'axios';
import {getFromStorage} from "./storage";



class SignupComponent extends Component {

    constructor(props){
        super(props);

        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.State = {

            first_name : '',
            last_name : '',
            email : '',
            password:'',
            phone_number:''

        }
    }


    componentDidMount() {

        const obj = getFromStorage('the-main-app');



        if(obj && obj.token){
            const {token} = obj;

            fetch('/verify?token=' + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success){
                        this.setState({
                            token,
                            isLoading:false
                        });
                    }else{

                        this.setState({

                            isLoading:false
                        });
                    }
                });

        }else {

            this.setState({
                isLoading:false,
            })
        }
    }
    onChangeFirstName(e){
        this.setState({

            first_name: e.target.value
        });

    }

    onChangeLastName(e){
        this.setState({

            last_name: e.target.value
        });

    }

    onChangeEmail(e){
        this.setState({

            email: e.target.value
        });

    }

    onChangePassword(e){
        this.setState({

            password: e.target.value
        });

    }

    onChangePhone(e){
        this.setState({

            phone_number: e.target.value
        });

    }

    onSubmit(e){

        e.preventDefault();
        const obj = {

            first_name:this.state.first_name,
            last_name: this.state.last_name,
          email: this.state.email,
          password:this.state.password,
         phone_number: this.state. phone_number
        };


        axios.post('http://localhost:4001/user/add',obj).then(res => console.log(res.data));



      //  console.log(`The Values are $(this.state.first_name), $(this.state.last_name),$(this.state.email),$(this.state.password),$(this.state. phone_number)`)

        this.setState({
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            phone_number:''

        })
    }

    render() {
        return (

            <Router>
            <div>

                <form className="text-center border border-light p-5" onSubmit = {this.onSubmit}>

                    <p className="h4 mb-4">Sign up</p>

                    <div className="form-row mb-4">
                        <div className="col">

                            <input type="text" id="defaultRegisterFormFirstName" className="form-control"
                                   placeholder="First name" value={this.props.first_name}
                                   onChange={this.onChangeFirstName}/>
                        </div>
                        <div className="col">

                            <input type="text" id="defaultRegisterFormLastName" className="form-control"
                                   placeholder="Last name" value={this.props.last_name}
                                   onChange={this. onChangeLastName}/>
                        </div>
                    </div>


                    <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4"
                           placeholder="E-mail" value={this.props.email}
                           onChange={this.onChangeEmail}/>


                        <input type="password" id="defaultRegisterFormPassword" className="form-control"
                               placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" value={this.props.password}
                               onChange={this. onChangePassword}/>
                            <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                                At least 8 characters and 1 digit
                            </small>


                            <input type="text" id="defaultRegisterPhonePassword" className="form-control"
                                   placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock" value={this.props.phone_number}
                                   onChange={this.onChangePhone}/>
                                <small id="defaultRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                                    Optional - for two step authentication
                                </small>


                                {/*<div className="custom-control custom-checkbox">*/}
                                {/*    <input type="checkbox" className="custom-control-input"*/}
                                {/*           id="defaultRegisterFormNewsletter"/>*/}
                                {/*        <label className="custom-control-label" htmlFor="defaultRegisterFormNewsletter">Subscribe*/}
                                {/*            to our newsletter</label>*/}
                                {/*</div>*/}


                                <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>






                </form>
            </div></Router>

        );
    }
}

export default SignupComponent;