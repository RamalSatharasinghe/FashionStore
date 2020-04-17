import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import { Switch, Route } from 'react-router-dom'

class AddCategories extends Component {
    render() {
        return (
            <div>
                <AdminNav></AdminNav>
                <h1>Categories section</h1>
                <Footer></Footer>
            </div>
        )
    }
}

export default AddCategories
