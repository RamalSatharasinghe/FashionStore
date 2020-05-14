import React, { Component } from 'react';
import axios from 'axios';

import ProductTableRow from './productTableRow';
import AddProducts from "./AddProducts";

import ProductStockNav from "./ProductStockNav";

class displayProduct extends Component{


    constructor(props) {
        super(props);

        this.state ={
            products:[]
        };

        this.handleViewProducts  = this.handleViewProducts.bind(this);
        this.handleDeleteProduct = this.handleDeleteProduct.bind(this);
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



    refreshPage() {
        window.location.reload(false);
    }


   displayproducts = products =>{
        return products.map( product => {

            return(
                <tr key={product._id}>


                    <td className="card-title"> {product._id}</td>

                    <td className="card-title"> {product.name}</td>

                    <td className="card-title"> {product.category}</td>

                    <td className="card-title"> {product.price}</td>

                    <td className="card-title"> {product.quantity}</td>

                    <td className="card-title"> {product.discount}</td>

                    <td>
                        <button onClick={() => {



                        }}  className="btn-success w-75 mt-1"> Edit </button>
                    </td>


                    <td>
                        <button type="button"  onClick={() => {

                            this.handleDeleteProduct(product._id);

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


            </div>
        );
    }

}

export default displayProduct;