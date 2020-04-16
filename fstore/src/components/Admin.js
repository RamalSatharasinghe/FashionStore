import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'

class Admin extends Component {
    render() {
        return (
            <div>
                <AdminNav/>
                <h1>Hello</h1>
                <Footer/>
            </div>
        )
    }
}

export default Admin
