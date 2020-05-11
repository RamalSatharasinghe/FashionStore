import React, { Component } from 'react'


export class Signup extends Component {

    render() {
        return (
            <div className="card bg-light" style={{width:"800px", marginLeft:"300px"}}>
              <form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                
                    <input type="text" id="inputFname" className="form-control" placeholder="First name" required autoFocus></input>
                    
                    <input type="text" id="inputLname" className="form-control" placeholder="Last name" required autoFocus></input>
                    
                    <input type="text" id="inputMob" className="form-control" placeholder="+94xxxxxxxxx" required autoFocus></input>
                    
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus></input>
                    
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required></input>
                    <label htmlFor="sel1">User Type:</label>
                    <select className="form-control" id="sel1" placeholder="User Type">
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
