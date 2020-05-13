import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
//import Button from 'react-bootstrap/Button';


class productTableRow extends Component{
    render() {
        return(
            <div>


                <tr>

                    <td>{this.props.obj.product_name}</td>

                    <td>{this.props.obj.product_category}</td>
                    <td>{this.props.obj.product_price}</td>
                    <td>{this.props.obj.product_quantity}</td>
                    <td>{this.props.obj.product_discount}</td>

                    <td>
                        <button className="btn btn-danger">Delete</button>
                    </td>

                    <td>
                        <button className="btn btn-primary">Edit</button>
                    </td>


                </tr>

            </div>
        )
    }
}

export default productTableRow;