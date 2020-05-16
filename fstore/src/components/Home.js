import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'

export class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Footer/>
            </div>
        )
    }
}

export default Home
