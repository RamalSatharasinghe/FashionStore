import React, { Component } from 'react';
import './compCss/signin.css';

export class Signin extends Component {
    render() {
        return (
            <div className="card bg-light" style={{width:"800px", marginLeft:"300px"}}>

                <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                    
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                    
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <label htmlFor="sel1">User Type:</label>
                    <select className="form-control" id="sel1" placeholder="User Type">
                        <option>Customer</option>
                        <option>Admin</option>
                    </select>
                    <button className="btn btn-lg btn-primary " type="submit" style={{width:"100px"}}>Sign in</button>
                    <button className="btn btn-lg btn-danger " type="submit" style={{width:"120px"}}>Sign out</button>
                    {/* <Link to={{ pathname: '/admin' }}><button className="btnAdmin" type="button">Act as Admin</button></Link> */}

                    <p className="mt-5 mb-3 text-muted">&copy; 2020-2021</p>

                </form>

            </div>
        )
    }
}

export default Signin
