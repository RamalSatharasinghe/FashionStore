import React, { Component } from 'react';
import './compCss/signin.css';

export class Signin extends Component {
    render() {
        return (
            <div>

                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                    <label for="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus></input>
                    <label for="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>

                </form>

            </div>
        )
    }
}

export default Signin
