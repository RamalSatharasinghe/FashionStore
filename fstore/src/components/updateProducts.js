import React, { Component } from 'react'

import ProductStockNav from "./ProductStockNav";
import Footer from "./Footer";

class updateProducts extends Component{

    render() {
        return(
            <div>
            <ProductStockNav/>
            <div className="container pt-3 w-75 ">
            <div className="card">
            <h4 className="card-header bg-dark text-white">Update Product</h4>
            <div className="card-body bg-light">

            <form  method="POST">

                <div className="form-group">
                    <label className="float-left"> Product Name:</label>
                    <input  id="ID" name="productName" type="text" className='form-control w-100'
                            value={this.state.product_name}
                            onChange={this.onChangeProductName}/>


                </div>

                <div className="form-group">
                    <label className="float-left"> Category:</label>
                    <select name="productCategory" defaultValue="Choose Category" className="browser-default custom-select" onClick={this.onchangeProductCategory} >
                        <option disabled="disabled">Choose Category</option>
                        <option> T-Shirt</option>
                        <option> Denim</option>
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
                    <input name="productPrice" type="text" className='form-control w-100'
                           value={this.state.product_price}
                           onChange={this.onchangeProductPrice}/>


                </div>

                <div className="form-group">
                    <label className="float-left"> Quantity :</label>
                    <input name="productQuantity" type="text" className='form-control w-100'
                           value={this.state.product_quantity}
                           onChange={this.onchangeProductQuantity}/>


                </div>

                <div className="form-group">
                    <label className="float-left">  Unit Discount  :</label>
                    <input name="productDiscount" type="text" className='form-control w-100'
                           value={this.state.product_discount}
                           onChange={this.onchangeProductDiscount}/>


                </div>

                <div className="form-group">

                    <button type="submit" className="btn btn-success btn-lg w-50">Update Product</button>


                </div>






            </form>


        </div>
        </div>
    </div>



    <Footer/>

    </div>


        )
    }
}

export  default updateProducts;

