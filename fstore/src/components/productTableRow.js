import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
//import Button from 'react-bootstrap/Button';


class productTableRow extends Component{
    render() {
        return(
            <div>


                <tr>

                    <td>{this.props.obj.name}</td>

                    <td>{this.props.obj.category}</td>
                    <td>{this.props.obj.price}</td>
                    <td>{this.props.obj.quantity}</td>
                    <td>{this.props.obj.discount}</td>

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