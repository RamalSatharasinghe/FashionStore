import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import './compCss/signin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddCategories from './AddCategories'
import AddStoreManagers from './AddStoreManagers';

class Admin extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/admin/categories' component={AddCategories}></Route>
                    <Route path='/admin/storemanagers' component={AddStoreManagers}></Route>
                <div>
                    <AdminNav />
                    <div>
                        <Link to={{ pathname: '/admin/categories' }}><button className="btn">Add Categories</button></Link>
                        <Link to={{ pathname: '/admin/storemanagers' }}><button className="btn">Add Store Managers</button></Link>
                    </div>
                    <Footer />
                </div>
                </Switch>
            </Router>
        )
    }
}

export default Admin
