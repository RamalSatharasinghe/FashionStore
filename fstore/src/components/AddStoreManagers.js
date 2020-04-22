import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import './compCss/signin.css'
import axios from 'axios'

class AddStoreManagers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sName: "",
            sEmail: "",
            sPassword: "",
            sDeleteEmail: ""
        };

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setDeleteEmail = this.setDeleteEmail.bind(this);
        this.deleteStoreManager = this.deleteStoreManager.bind(this);
    }

    setName(event) {
        this.setState({
            sName: event.target.value
        });
    }

    setEmail(event) {
        this.setState({
            sEmail: event.target.value
        });
    }

    setPassword(event) {
        this.setState({
            sPassword: event.target.value
        });
    }

    setDeleteEmail(event) {
        this.setState({
            sDeleteEmail: event.target.value
        });
    }

    deleteStoreManager() {
        let deleteEmail = this.state.sDeleteEmail;
        axios.get('/admin/storemanagers/delete-storemanager/' + deleteEmail);
        this.setState({
            sDeleteEmail: ""
        });
    }


    render() {
        return (
            <div>
                <AdminNav></AdminNav>
                <h1>Manage Store Managers</h1>
                <h3>Add Store Managers</h3>
                <form action="/admin/storemanagers/addStoreManagers" method="POST">
                    <div>
                        <label className="lbl">Store Manager Name : </label>
                        <input onChange={this.setName}  name="storeManagerName" type="text" className="inpt" placeholder="Name" value={this.state.sName}/>
                    </div>
                    <div>
                        <label className="lbl">Store Manager Email : </label>
                        <input onChange={this.setEmail}  name="storeManagerEmail" type="email" className="inpt" placeholder="Email" value={this.state.sEmail}/>
                    </div>
                    <div>
                        <label className="lbl">Store Manager Password : </label>
                        <input onChange={this.setPassword}  name="storeManagerPassword" type="password" className="inpt" placeholder="**********" value={this.state.sPassword}/>
                    </div>
                    <button type="submit" className="btn">Add Store Manager</button>
                </form>
                <h3>Delete Store Managers</h3>
                <form>
                    <div>
                        <input onChange={this.setDeleteEmail} value={this.state.sDeleteEmail} name="deleteEmail" type="email" className="inpt" placeholder="Email"/> <br/>
                        <button type="button" onClick={this.deleteStoreManager} className="btnRed">Delete Store Manager</button>
                    </div>
                </form>
                <Footer></Footer>
            </div>
        )
    }
}

export default AddStoreManagers
