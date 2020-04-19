import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import axios from 'axios'

class AddCategories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: null
        }

        this.setTitle = this.setTitle.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleSubmit() {
        axios.get("/admin/categories/newEndPoint").then(function(res) {
            console.log(res);
        })
    }
    
    render() {
        return (
            <div>
                <div>
                    <AdminNav></AdminNav>
                    <h1>Add Product Categories</h1>
                    <form>
                        <div>
                            <label className="lbl">Category Name : </label>
                            <input onChange={this.setTitle} type="text" className="inpt" placeholder="Category Name" value={this.state.title}></input>
                        </div>
                        <button type="button" onClick={this.handleSubmit} className="btn">Add Category</button>
                        <button type="button" className="btn">View Exisiting Categories</button>
                    </form>


                    <Footer></Footer>
                </div>
            </div>
        )
    }
}

export default AddCategories

