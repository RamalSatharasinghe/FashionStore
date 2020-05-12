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
    }

    componentDidMount() {

        axios.get('/stock/products/getproducts').then( res => {
            this.state({
                products: res.data
            });
        }).catch((error) =>{

            console.log(error);
        })
    }


    DataTable(){

        return this.state.products.map((res, i) =>{
            return <ProductTableRow obj = {res} key={i}/>;
        });
    }

    render() {
        return(

            <div>
                <ProductStockNav/>
                <h3 align="center">  Product List</h3>
                <table className="table table-striped" style={{marginTop :20}}>

                    <tread>
                        <tr>
                        <th> Product Name</th>
                        <th> Category</th>
                        <th> Unit Price </th>
                        <th> Quantity </th>
                        <th> Discount(Per Unit)</th>
                       <th colSpan="2"> Action</th>

                        </tr>

                    </tread>

                    <tbody>
                    {this.DataTable()}
                    </tbody>






                </table>


            </div>
        );
    }

}

export default displayProduct;