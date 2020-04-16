import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export class AdminNav extends Component {
    render() {
        return (
            <div  >

                <div >

                    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                        <Link to={''} className="navbar-brand">FashionHub ~ ADMIN</Link>
                        </nav>

                    {

                    }
                    <br />
                </div>
            </div>
        )
    }
}

export default AdminNav
