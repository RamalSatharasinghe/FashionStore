import React, { Component } from 'react'
import axios from 'axios';
import ProductStockNav from "./ProductStockNav";
import Footer from "./Footer";


class updateProducts extends Component{


    constructor(props) {
        super(props);



        //this.onChangeProductName = this.onChangeProductName.bind(this);
       // this.onchangeProductCategory = this.onchangeProductCategory.bind(this);
        //this.onchangeProductDiscount = this.onchangeProductDiscount.bind(this);
        //this.onchangeProductPrice = this.onchangeProductPrice.bind(this);
        //this.onchangeProductQuantity = this.onchangeProductQuantity.bind(this);
        //this.onSubmit = this.onSubmit.bind(this);



            this.state ={
                product_name:'',
                product_category:'',
                product_price:'',
                product_quantity:'',
                product_discount:''
            };

    }





    componentDidMount() {

        let val = '5ebd7f408bd62d4434bcd461';
        axios.get('/stock/viewProducts/edit/5ebd7f408bd62d4434bcd461' )
            .then(res =>{
                this.setState({
                    product_name: res.data.product_name,
                    product_category:res.data.product_category,
                    product_price: res.data.product_price,
                    product_quantity:res.data.product_quantity,
                    product_discount:res.data.product_discount

                })

            })

    }


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
                            />


                </div>

                <div className="form-group">
                    <label className="float-left"> Category:</label>
                    <select name="productCategory" defaultValue="Choose Category" className="browser-default custom-select" >
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
                          />


                </div>

                <div className="form-group">
                    <label className="float-left"> Quantity :</label>
                    <input name="productQuantity" type="text" className='form-control w-100'
                           value={this.state.product_quantity}
                          />


                </div>

                <div className="form-group">
                    <label className="float-left">  Unit Discount  :</label>
                    <input name="productDiscount" type="text" className='form-control w-100'

                           value={this.state.product_discount}
                          />


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

