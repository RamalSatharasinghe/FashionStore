import React, { Component } from 'react'

import Footer from './Footer'
import axios from 'axios'
import {storage} from './../firebase'
import ProductStockNav from "./ProductStockNav";


class AddProducts extends Component{
    constructor(props) {
        super(props);
        this.state ={

            product_name:'',
            product_category:'',
            product_price:'',
            product_quantity:'',
            product_discount:'',
            image:null,
            newUrl:'',

            Category:[]           // Array for store categories form category collection
        };

        this.onChangeProductName = this.onChangeProductName.bind(this);
        this.onchangeProductCategory = this.onchangeProductCategory.bind(this);
        this.onchangeProductDiscount = this.onchangeProductDiscount.bind(this);
        this.onchangeProductPrice = this.onchangeProductPrice.bind(this);
        this.onchangeProductQuantity = this.onchangeProductQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.handleGetCategories = this.handleGetCategories.bind(this);
        this.displayCategories = this.displayCategories.bind(this);
        //this.optionC = this.optionC.bind(this);
        this.onchangeImage = this.onchangeImage.bind(this);




    }


            componentDidMount() {

                this.handleGetCategories();
                this.displayCategories(this.state.Category);


            }


            onChangeProductName(e){
                this.setState({
                    product_name:e.target.value
                });
            }

            onchangeProductCategory(e){
                this.setState({
                    product_category:e.target.value
                });
            }

            onchangeProductPrice(e){
                this.setState({
                    product_price:e.target.value
                });
            }

            onchangeProductQuantity(e){
                this.setState({
                    product_quantity:e.target.value
                });
            }


            onchangeProductDiscount(e){
                this.setState({
                    product_discount:e.target.value
                });
            }


            onchangeImage(e){
                if(e.target.files[0]){
                    const image = e.target.files[0];
                    console.log(image);


                    const uploadtask =  storage.ref("images/"+image.name).put(image);
                    uploadtask.on('state_changed',
                        (snapshot) =>{

                        },
                        (error) =>{
                            console.log(error)
                        },
                        () =>{
                            storage.ref('images').child(image.name).getDownloadURL().then(imgurl =>{
                                console.log(imgurl)
                                this.setState({
                                    newUrl:imgurl
                                })

                            })
                        });
                }




            }

            handleGetCategories(){              //calling getcategory method

            axios.get('/stock/viewProducts/getcategory').then((res) =>{

                let proCat = res.data;
                this.setState({

                    Category:proCat


                });



                }).catch(() =>{

                            alert('Error receiving category  data');

                            }
                        )




            }











            onSubmit(e){
               e.preventDefault();

               console.log(this.state.product_name);
               console.log(this.state.product_category);
               console.log(this.state.product_price);
               console.log(this.state.product_quantity);
               console.log(this.state.product_discount);

            }

                        displayCategories = categories =>{                  // mapping getcategory method
                            return categories.map( category => {

                                return(
                                    <option key={category._id}>{category.title}</option>
                                );
                            });

                        };


      

    render() {
        return (
            <div>


                <ProductStockNav/>
                <div className="container pt-3 w-75 ">
                <div className="card">
                    <h4 className="card-header bg-dark text-white">Add New Product</h4>
                    <div className="card-body bg-light">

                        <form action="/stock/products/addProduct" method="POST">

                            <div className="form-group">
                                <label className="float-left"> Product Name:</label>
                                <input  id="ID" name="productName" type="text" className='form-control w-100'
                                       value={this.state.product_name}
                                       onChange={this.onChangeProductName}/>


                            </div>


                            <div className="form-group">
                                <input className="float-left" type="file" onChange={this.onchangeImage}/>
                                <input type="hidden" name="imageUrl" value={this.state.newUrl}/>

                            </div>

                            <br/>
                            <br/>

                            <div className="form-group">
                                <label className="float-left"> Category:</label>
                                <select name="productCategory" defaultValue="Choose Category" className="browser-default custom-select" onClick={this.onchangeProductCategory} >
                                    <option disabled="disabled">Choose Category</option>


                                    {this.displayCategories(this.state.Category)}

                                </select>
                            </div>



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
                                <label className="float-left"> Unit Discount :</label>
                                <input name="productDiscount" type="text" className='form-control w-100'
                                       value={this.state.product_discount}
                                       onChange={this.onchangeProductDiscount}/>


                            </div>

                            <div className="form-group ">

                                <button type="submit" className="btn btn-success btn-lg w-50 " >Add Product</button>


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