import React, { Component } from 'react'

import Footer from './Footer'
import axios from 'axios'
import {render} from "react-dom";
import ProductStockNav from "./ProductStockNav";


class AddProducts extends Component{






    constructor(props) {
        super(props);
        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onchangeProductCategory = this.onchangeProductCategory.bind(this);
        this.onchangeProductPrice = this.onchangeProductPrice.bind(this);
        this.onchangeProductQuantity = this.onchangeProductQuantity.bind(this);
        this.onchangeProductDiscount  = this.onchangeProductDiscount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state ={

            product_name:'',
            product_category:'',
            product_price:'',
            product_quantity:'',
            product_discount:''


        }


    }
            onChangeProductName(e){
                this.setState({
                    product_name:e.target.value

                })
            }

            onchangeProductCategory(e){
                this.setState({
                    product_category:e.target.value
                })
            }

            onchangeProductPrice(e){
                this.setState({
                    product_price:e.target.value
                })
            }

            onchangeProductQuantity(e){
                this.setState({
                    product_quantity:e.target.value
                })
            }


            onchangeProductDiscount(e){
                this.setState({
                    product_discount:e.target.value
                })
            }


            onSubmit(e){
               e.preventDefault();

               this.setState({
                   product_name:'',
                   product_category:'',
                   product_price:'',
                   product_quantity:'',
                   product_discount:''
               })

            }





    render() {
        return (
            <div>


                <ProductStockNav/>
                <div className="container pt-3 w-75 ">
                <div className="card">
                    <h4 className="card-header bg-dark text-white">Add New Product</h4>
                    <div className="card-body bg-light">

                        <form onSubmit={this.onSubmit}>

                            <div className="form-group">
                                <label className="float-left"> Product Name:</label>
                                <input type="text" className='form-control w-100'
                                       value={this.state.product_name}
                                       onChange={this.onChangeProductName}/>


                            </div>

                            <div className="form-group">
                                <label className="float-left"> Category:</label>
                                <select className="browser-default custom-select " >

                                    <option> T-Shirt</option>
                                    <option> Denium</option>



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
                                <input type="text" className='form-control w-100'
                                       value={this.state.product_price}
                                       onChange={this.onchangeProductPrice}/>


                            </div>

                            <div className="form-group">
                                <label className="float-left"> Quantity :</label>
                                <input type="text" className='form-control w-100'
                                       value={this.state.product_quantity}
                                        onChange={this.onchangeProductQuantity}/>


                            </div>

                            <div className="form-group">
                                <label className="float-left"> Discount :</label>
                                <input type="text" className='form-control w-100'
                                       value={this.state.product_discount}
                                       onChange={this.onchangeProductDiscount}/>


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

export default AddProducts;