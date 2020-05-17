import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddProducts from "./AddProducts";

import ProductStockNav from "./ProductStockNav";

import editproduct from './updateProducts';

class displayProduct extends Component{


    constructor(props) {
        super(props);

        this.state ={
            products:[],
            editProducts:[],
            editName:'',
            editPrice:'',
            editQuantity:'',
            editDiscount:'',
            editId:'',

            updatedName:'',
            updatedCategory:'',
            updatedPrice:'',
            updatedQuantity:'',
            updatedDiscount:''


        };

        this.handleViewProducts  = this.handleViewProducts.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
        this.handleEditProduct = this.handleEditProduct.bind(this);
        this.handleEditname = this.handleEditname.bind(this);
        this.handleEditPrice = this.handleEditPrice.bind(this);
        this.handleEditQuantity = this.handleEditQuantity.bind(this);
        this.handleEditDiscount = this.handleEditDiscount.bind(this);
        this.handleEditID = this.handleEditID.bind(this);


        this.onChangeUpName = this.onChangeUpName.bind(this);
        this.onChangeUpCategory = this.onChangeUpCategory.bind(this);

        this.onchangeUpPrice = this.onchangeUpPrice.bind(this);

        this.onchangeUpQuantity = this.onchangeUpQuantity.bind(this);
        this.onchangeUpDiscount = this.onchangeUpDiscount.bind(this);

    }




            componentDidMount() {

                this.handleViewProducts();
                this.displayproducts(this.state.products);
            }

            handleViewProducts(){

                axios.get('/stock/viewProducts/getproducts').then((res) =>{

                    let data = res.data;

                    this.setState({

                        products : data
                    });
                    console.log("data called");
                    console.log(this.state.products);


                }).catch(() => {

                    alert('Error receiving data');
                })
            }

            handleDeleteProduct(ID){

                console.log('CALLED ' +ID);

                axios.get('/stock/viewProducts/deletePro/' +ID )
                    .then((res) => {

                        console.log("Product is deleteed")
                    }).catch((err) =>{
                    console.log(err);
                });
            }




            handleEditProduct(ID){
                console.log('CALLED ' +ID);

                axios.get('/stock/viewProducts/edit/' +ID )
                    .then((res) => {

                        console.log('edit Product called');

                      this.setState({
                          editName:res.data.name,
                          editPrice:res.data.price,
                          editQuantity:res.data.quantity,
                          editDiscount:res.data.discount,
                          editId:res.data._id


                          }

                      );

                        console.log(this.handleEditname())




                    }).catch((err) =>{
                    console.log(err);
                });

            }

                        handleEditID(){

                            return  this.state.editId;

                        }



                        handleEditname(){

                           return  this.state.editName;

                        }


                        handleEditPrice(){

                            return this.state.editPrice
                        }

                        handleEditQuantity(){

                            return this.state.editQuantity
                        }


                        handleEditDiscount(){

                            return this.state.editDiscount
                        }



                        refreshPage() {
                            window.location.reload(false);
                        }


                                onChangeUpName(e){
                                    this.setState({
                                        updatedName :e.target.value
                                    });
                                }

                                onChangeUpCategory(e){
                                    this.setState({
                                        updatedCategory:e.target.value

                                    })

                                }

                                onchangeUpPrice(e){

                                   this.setState({
                                       updatedPrice:e.target.value
                                   })
                                }


                                onchangeUpQuantity(e){

                                    this.setState({
                                        updatedQuantity :e.target.value
                                    })
                                }

                                onchangeUpDiscount(e){

                                    this.setState({
                                        updatedDiscount  :e.target.value
                                    })
                                }


                                onsubmit(e){
                                    e.preventDefault();

                                    axios.post()

                                }


                            

                               displayproducts = products =>{
                                    return products.map( product => {

                                        return(
                                            <tr key={product._id}>


                                                <td className="card-title"> {product._id} </td>

                                                <td className="card-title"> {product.name}<br/>
                                                  </td>

                                                <td className="card-title"> {product.category}<br/>
                                                   </td>

                                                <td className="card-title"> {product.price}<br/>
                                                    </td>

                                                <td className="card-title"> {product.quantity}<br/>
                                                   </td>

                                                <td className="card-title"> {product.discount} <br/>
                                                    </td>

                                                <td>
                                                   <button type="button"  onClick={() => {

                                                        this.handleEditProduct(product._id);




                                                    }}  className="btn-success w-75 mt-1"> Edit </button>
                                                </td>


                                                <td>
                                                    <button type="button"  onClick={() => {

                                                        this.handleDeleteProduct(product._id);
                                                        this.refreshPage(); // refreshing the page after deleting a product

                                                    }}  className="btn-danger w-75 mt-1"> Delete </button>
                                                </td>






                                            </tr>

                                        );
                                    });

                               };


    render() {
        return(





                            <div>
                                <ProductStockNav/>
                                <h3 align="center">  Product Inventory </h3>
                                <table className="table table-striped" style={{marginTop :20}}>


                                    <thead class="thead-dark">
                                    <tr>
                                        <th scope="col"> Product_ID</th>
                                        <th scope="col"> Product Name</th>
                                        <th scope="col">Product Category</th>
                                        <th scope="col">Unit Price </th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Unit Discount </th>

                                        <th scope="col">Action </th>
                                        <th scope="col">Action </th>
                                    </tr>
                                    </thead>

                                    <tbody>

                                    {this.displayproducts(this.state.products)}

                                    </tbody>





                                </table>
                                <div>





                    <div className="container pt-3 w-75 ">
                        <div className="card">
                            <h4 className="card-header bg-dark text-white">Update Product</h4>
                            <div className="card-body bg-light">

                                <form  action ="/stock/viewProducts/updatePro" method="POST">



                                    <div className="form-group">
                                        <label className="float-left"> Product Name:</label>
                                        <input  id="ID" name="productName1" type="text" className='form-control w-100'
                                               defaultValue={this.handleEditname()}
                                                onChange={this.onChangeUpName}
                                        />


                                    </div>


                                    <div className="form-group">
                                        <label className="float-left"> Category:</label>
                                        <select name="productCategory2" defaultValue="Choose Category" className="browser-default custom-select"  onChange={this.onChangeUpCategory}>
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
                                        <input name="productPrice3" type="text" className='form-control w-100'
                                               defaultValue={this.handleEditPrice()}
                                               onChange={this.onchangeUpPrice}
                                        />


                                    </div>

                                    <div className="form-group">
                                        <label className="float-left"> Quantity :</label>
                                        <input name="productQuantity4" type="text" className='form-control w-100'
                                               defaultValue={this.handleEditQuantity()}
                                               onChange={this.onchangeUpQuantity}
                                        />


                                    </div>

                                    <div className="form-group">
                                        <label className="float-left">  Unit Discount  :</label>
                                        <input name="productDiscount5" type="text" className='form-control w-100'

                                               defaultValue={this.handleEditDiscount()}
                                               onChange={this.onchangeUpDiscount}
                                        />


                                    </div>

                                    <div className="form-group">
                                        <input type="hidden" name="UpdateID" value={this.handleEditID()} className='form-control w-100'/>
                                    </div>

                                    <div className="form-group">

                                        <button type="submit" className="btn btn-success btn-lg w-50">Update Product</button>


                                    </div>






                                </form>

}
                            </div>
                        </div>
                    </div>


                </div>


            </div>


        );
    }

}

export default displayProduct;