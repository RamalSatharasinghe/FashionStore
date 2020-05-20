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
                    <Route path='/admin/categories' component={AddCategories}/>
                    <Route path='/admin/storemanagers' component={AddStoreManagers}/>
                <div>
                    <AdminNav />
                    <div>
                        <Link to={{ pathname: '/admin/categories' }}><button className="btn">Manage Categories</button></Link>
                        <Link to={{ pathname: '/admin/storemanagers' }}><button className="btn">Manage Store Managers</button></Link>
                    </div>
                    <Footer />
                </div>
                </Switch>
            </Router>
        )
    }
}

export default Admin
