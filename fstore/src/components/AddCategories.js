import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import axios from 'axios'

class AddCategories extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             title: ""
        };

        this.setTitle = this.setTitle.bind(this);
        // this.handleViewCategories= this.handleViewCategories.bind(this);
        this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    // handleViewCategories() {
    //     axios.get('/admin/categories/get-categories').then(r => console.log(r));
    // }

    handleDeleteCategory(){
        let deleteTitle = this.state.title;
        axios.get('/admin/categories/delete-category/'+deleteTitle);
        this.setState({
            title: ""
        });
    }

    render() {
        return (
            <div>
                <div>
                    <AdminNav></AdminNav>
                    <h1>Manage Product Categories</h1>
                    <form action="/admin/categories/addCat" method="POST">
                        <div>
                            <label className="lbl">Category Name : </label>
                            <input onChange={this.setTitle}  name="title" type="text" className="inpt" placeholder="Category Name" value={this.state.title}/>
                        </div>
                        <button type="submit" className="btn">Add Category</button>
                        <button type="button" className="btn">View Existing Categories</button>
                        <button type="button" onClick={this.handleDeleteCategory} className="btnRed">Delete Category</button>
                    </form>
                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default AddCategories

