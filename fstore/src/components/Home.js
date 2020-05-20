import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import CategoryNav from "./CategoryNav";

export class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <CategoryNav/>
                <Footer/>
            </div>
        )
    }
}

export default Home
