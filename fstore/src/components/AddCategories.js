import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import './compCss/signin.css'

class AddCategories extends Component {
    render() {
        return (
            <div>
                <AdminNav></AdminNav>
                <h1>Add Product Categories</h1>

                <div>
                    <label className="lbl">Category Name : </label>
                    <input type="text" className="inpt" placeholder="Category Name"></input>
                </div>
                <button type="submit" className="btn">Add Category</button>
                <button type="button" className="btn">View Exisiting Categories</button>

                <Footer></Footer>
            </div>
        )
    }
}

export default AddCategories
