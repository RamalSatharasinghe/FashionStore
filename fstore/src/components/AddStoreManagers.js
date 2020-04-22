import React, { Component } from 'react'
import AdminNav from './AdminNav'
import Footer from './Footer'
import './compCss/signin.css'

class AddStoreManagers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sName: "",
            sEmail: "",
            sPassword: ""
        };

        this.setName = this.setName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
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

    render() {
        return (
            <div>
                <AdminNav></AdminNav>
                <h1>Add Store Managers</h1>
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
                <Footer></Footer>
            </div>
        )
    }
}

export default AddStoreManagers
