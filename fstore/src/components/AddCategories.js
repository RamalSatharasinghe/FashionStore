import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import axios from 'axios'
import AlertMessage from "./AlertMessage";

class AddCategories extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             title: "",
            categories: [],
            message : ''
        };

        this.setTitle = this.setTitle.bind(this);
        this.handleViewCategories= this.handleViewCategories.bind(this);
        this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    }

    componentDidMount() {
        this.handleViewCategories();
        this.displayCategories(this.state.categories);
    }

    setTitle(event) {
        this.setState({
            title: event.target.value
        });
    }

    handleViewCategories() {
        axios.get('/admin/categories/get-categories').then((response) => {
            let data = response.data;
            this.setState({
                categories: data
            });
            console.log('data has been received');
            console.log(this.state.categories);
        })
            .catch(() => {
                alert('Error receiving data');
            });
    }

    refreshPage() {
        window.location.reload(false);
    }

    handleDeleteCategory(){
        let deleteTitle = document.getElementById("mainID").value;
        axios.get('/admin/categories/delete-category/' + deleteTitle).then(r  => {
            this.setState({
                message : 'success'
            });
        });
        this.setState({
            title: ""
        });
    }

    handleEditCategory(editName) {
        let editTitle = document.getElementById("mainID").value;
        console.log(editTitle);


        axios.post('/admin/categories/editCat/' + editTitle + '/' + editName).then(r => {

            this.refreshPage();

        }).catch((err) => {
            this.setState({
                message : 'empty'
            });
        });
        this.setState({
            title: ""
        });
    }

    displayCategories = categories => {
        return categories.map(category => {
            return (
                <tr key={category._id}>
                    <td className="catTitle">{category.title}
                    </td>
                    <td>
                        <input id={category._id} type="text" name="editCatTitle"/>
                    </td>
                    <td>
                    <button type="button" onClick={() => {
                        let id = category._id;
                        let editName = document.getElementById(id.toString()).value;

                        document.getElementById(id.toString()).value = "";

                        if(editName!=null) {
                            document.getElementById("mainID").value = category.title;
                            this.handleEditCategory(editName);
                        }
                        else {
                            alert('Error');
                        }

                    }} className="btn btnEdit">Edit</button>
                    </td>
                    <td>
                        <button type="button" onClick={() => {

                            document.getElementById("mainID").value = category.title;

                            this.handleDeleteCategory();
                            this.refreshPage();

                        }} className="btn btnEdit btnDel">Delete</button>
                    </td>
                </tr>
            );
        });
    };

    render() {
        return (
            <div>
                <div>
                    <AdminNav/>
                    <h1>Manage Product Categories</h1>
                    {this.state.message==='empty'?<AlertMessage/>:null}
                    <form action="/admin/categories/addCat" method="POST">
                        <div>
                            <label className="lbl">Category Name : </label>
                            <input onChange={this.setTitle} required={true} id="mainID" name="title" type="text" className="inpt" placeholder="Category Name" value={this.state.title}/>
                        </div>
                        <button type="submit" className="btn">Add Category</button>
                        <button type="button" onClick={this.refreshPage} className="btn btnYellow">Refresh Page</button>
                    </form>
                    <table className="table table-dark">
                        <tbody>
                        {this.displayCategories(this.state.categories)}
                        </tbody>
                    </table>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default AddCategories

