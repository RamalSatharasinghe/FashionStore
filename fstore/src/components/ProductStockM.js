import React, { Component } from 'react'
import ProductStockNav from './ProductStockNav'
import Footer from './Footer'
import './compCss/signin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class ProductStockM extends Component{

    render() {
        return (
            <div>
                <ProductStockNav/>




                <div className="container pt-3 w-50 ">
                <div className="card bg-dark">
                    <div className="card-header text-white">
                        <h4>Add Products</h4>
                    </div>
                            <div className="card-body">
                                <button className= "btn btn-success w-50 ">Add New Product</button>
                    </div>
                </div>
                </div>

                <div className="container pt-5 w-50 ">
                    <div className="card bg-dark">
                        <div className="card-header text-white">
                            <h4>View Products</h4>
                        </div>
                            <div className="card-body">
                                <button className= "btn btn-success w-50 ">View Products </button>
                        </div>
                    </div>
                </div>



                

                <Footer />
            </div>




        );
    }
}


export default ProductStockM;

