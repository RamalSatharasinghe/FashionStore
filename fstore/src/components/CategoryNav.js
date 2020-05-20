import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './compCss/signin.css';

class CategoryNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            categories : []
        };

    }

    componentDidMount() {
        this.handleViewCategories();
        this.displayCategories(this.state.categories);
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

    displayCategories = categories => {
        return categories.map(category => {
            return (
                <li className="nav-item">
                    <a className="nav-link" href={category.title}>{category.title}</a>
                </li>
            );
        });
    };

    render () {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        {this.displayCategories(this.state.categories)}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default CategoryNav;
