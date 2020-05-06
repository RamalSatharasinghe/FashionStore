import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class ProductStockNav extends Component{

render() {
    return(

        <div  >

            <div >

                <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                    <Link to={''} className="navbar-brand">FashionHub ~ Stock Management</Link>


                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={''} className="nav-link">Home</Link>

                        </li>
                    </ul>
                </nav>

                {

                }
                <br />
            </div>
        </div>



    );
}


}

export default ProductStockNav;