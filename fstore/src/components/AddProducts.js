import React, { Component } from 'react'

import Footer from './Footer'
import axios from 'axios'
import {render} from "react-dom";
import ProductStockNav from "./ProductStockNav";


class AddProducts extends Component{

    render() {
        return (
            <div>
                <ProductStockNav/>
                <div className="container pt-3 w-75 ">
                <div className="card">
                    <h4 className="card-header bg-dark text-white">Add New Product</h4>
                    <div className="card-body bg-light">

                        <form>

                            <div className="form-group">
                                <label className="float-left"> Product Name:</label>
                                <input type="text" className='form-control w-100' />


                            </div>

                            <div className="form-group">
                                <label className="float-left"> Category:</label>
                                <select className="browser-default custom-select  " >
                                    <option selected>Choose...</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>


                            </div>

                            <div className="form-group float-left mt-3">
                                <input type="file"/>
                            </div>


                            <br/>
                            <br/>
                            <br/>

                            <div className="form-group">
                                <label className="float-left mt-6"> Unit Price:</label>
                                <input type="text" className='form-control w-100'/>


                            </div>

                            <div className="form-group">
                                <label className="float-left"> Quantity :</label>
                                <input type="text" className='form-control w-100'/>


                            </div>

                            <div className="form-group">
                                <label className="float-left"> Discount :</label>
                                <input type="text" className='form-control w-100'/>


                            </div>

                            <div className="form-group">

                                <button type="button" className="btn btn-success btn-lg w-50">Add Product</button>


                            </div>






                        </form>


                    </div>
                </div>
                </div>



                <Footer/>

            </div>

        );
    }

}

export default AddProducts