import React, { Component } from 'react';
import axios from 'axios';

class displayProduct extends Component{





    render() {
        return(

            <div>
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

                    </tbody>






                </table>


            </div>
        );
    }

}