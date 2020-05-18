import React, { Component } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import HomeComponent from './home.component'

export class Home extends Component {
    render() {
        return (
            <div>
                <Nav/>
                {/*<HomeComponent/>*/}
                <Footer/>
            </div>
        )
    }
}

export default Home