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
            sDeleteEmail: "",
            storemanagers: []
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
        let deleteEmail = document.getElementById("mainEMAIL").value;
        axios.get('/admin/storemanagers/delete-storemanager/' + deleteEmail);
        this.setState({
            sDeleteEmail: ""
        });
    }

    componentDidMount() {
        this.handleViewStoreManagers();
        this.displayStoreManagers(this.state.storemanagers);
    }

    handleViewStoreManagers() {
        axios.get('/admin/storemanagers/getStoreManagers').then((response) => {
            let data = response.data;
            this.setState({
                storemanagers: data
            });
            console.log('data has been received');
            console.log(this.state.storemanagers);
        })
            .catch(() => {
                alert('Error receiving data');
            });
    }

    refreshPage() {
        window.location.reload(false);
    }

    displayStoreManagers = storeManagers => {
        return storeManagers.map(storeManager => {
            return (
                <tr key={storeManager._id}>
                    <td className="catTitle">{storeManager.sName}
                    </td>
                    <td className="catTitle">{storeManager.sEmail}
                    </td>
                    <td className="catTitle">{storeManager.sPassword}
                    </td>
                    <td>
                        <button type="button" onClick={() => {

                            document.getElementById("mainEMAIL").value = storeManager.sEmail;

                            this.deleteStoreManager();
                            this.refreshPage();

                        }} className="btn btnEdit btnDel">Remove Access</button>
                    </td>
                </tr>
            );
        });
    };


    render() {
        return (
            <div>
                <AdminNav/>
                <h1>Manage Store Managers</h1>
                <h3>Add Store Managers</h3>
                <form action="/admin/storemanagers/addStoreManagers" method="POST">
                    <div>
                        <label className="lbl">Store Manager Name : </label>
                        <input onChange={this.setName} required={true} name="storeManagerName" type="text"
                               className="inpt" placeholder="Name" value={this.state.sName}/>
                    </div>
                    <div>
                        <label className="lbl">Store Manager Email : </label>
                        <input onChange={this.setEmail} id="mainEMAIL" required={true}
                               name="storeManagerEmail" type="email" className="inpt" placeholder="Email" value={this.state.sEmail}/>
                    </div>
                    <div>
                        <label className="lbl">Store Manager Password : </label>
                        <input onChange={this.setPassword} required={true}  name="storeManagerPassword"
                               type="password" className="inpt" placeholder="**********" value={this.state.sPassword}/>
                    </div>
                    <button type="submit" className="btn">GRANT ACCESS</button>
                </form>

                <table className="table table-dark">
                    <tbody>
                    {this.displayStoreManagers(this.state.storemanagers)}
                    </tbody>
                </table>


                <Footer/>
            </div>
        )
    }
}

export default AddStoreManagers
