import React, { Component } from 'react'
import ProductStockNav from './ProductStockNav'

import './compCss/signin.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddProducts from './AddProducts'

import viewProducts from './displayProduct';


class ProductStockM extends Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Route path ='/stock/products' component={AddProducts}></Route>
                    <Route path ='/stock/viewProducts' component={viewProducts}></Route>
            <div>
                <ProductStockNav/>


                <div className="container pt-3 w-50 ">
                <div className="card bg-dark">
                    <div className="card-header text-white">
                        <h4>Add Products</h4>
                    </div>
                            <div className="card-body">
                                <Link to={{ pathname: '/stock/products' }}><button className="btn btn-success w-50">Add Product</button></Link>


                    </div>
                </div>
                </div>

                <div className="container pt-5 w-50 ">
                    <div className="card bg-dark">
                        <div className="card-header text-white">
                            <h4>View Products</h4>
                        </div>
                            <div className="card-body">
                                <Link to={{ pathname: '/stock/viewProducts'}}><button className="btn btn-success w-50">View Product</button></Link>
                        </div>
                    </div>
                </div>





                        </div>

                </Switch>



            </Router>





        );
    }
}


export default ProductStockM;

