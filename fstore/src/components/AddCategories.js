import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import axios from 'axios'

class AddCategories extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             title: null
        };

        this.setTitle = this.setTitle.bind(this);
    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleViewCategories() {



    }

    render() {
        return (
            <div>
                <div>
                    <AdminNav></AdminNav>
                    <h1>Add Product Categories</h1>
                    <form action="/admin/categories/addCat" method="POST">
                        <div>
                            <label className="lbl">Category Name : </label>
                            <input onChange={this.setTitle}  name="title" type="text" className="inpt" placeholder="Category Name" value={this.state.title}/>
                        </div>
                        <button type="submit" className="btn">Add Category</button>
                        <button type="button" onClick={this.handleViewCategories} className="btn">View Existing Categories</button>
                    </form>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default AddCategories

