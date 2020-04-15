import React, { Component } from 'react';
import './compCss/signin.css';

export class Signin extends Component {
    render() {
        return (
            <div>
                
                <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>

                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2020-2021</p>

                </form>

            </div>
        )
    }
}

export default Signin
