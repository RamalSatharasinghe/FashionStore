import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'

export class AddCategories extends Component {
    render() {
        return (
            <div>
                <div>
                    <AdminNav></AdminNav>
                    <h1>Add Product Categories</h1>
                    <form action={this.handleSubmit} method="post">
                        <div>
                            <label className="lbl">Category Name : </label>
                            <input type="text" className="inpt" placeholder="Category Name"></input>
                        </div>
                        <button type="submit" className="btn">Add Category</button>
                        <button type="button" className="btn">View Exisiting Categories</button>
                    </form>


                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default AddCategories

