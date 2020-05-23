import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from "axios";
//let Business = require('./business.model');
// let Product = require('./product.model');
import  {ProductConsumer} from "../../context";

class TableRow extends Component{

     constructor(props){
         super(props);
         this.State = {

             inCart :false}
         // this.deleteItem1 = this.deleteItem1.bind(this);
     }


//    fRemove = (this.props.obj._id) => {

//     Business.findByIdAndRemove({id:req.params.id}, function(err,business){

//         if(err)res.json(err);
//         else res.json("Sucessfully Removed");
//     });

//    }


    //  deleteItem1 = id =>{
    //
    //      axios.get('http://localhost:4001/user/delete'+id).then(res => console.log(res.data));
    //
    //
    // }

    render(){
            // if(this.props.obj.email === 'abc@gmail.com'){
        return(

            <ProductConsumer>


                {(value) =>(

            <tr>

                <td><img src={this.props.obj.img} style={{width:"5rem",height:"5rem"}}/></td>
                <td>{this.props.obj.title}</td>
                <td>{this.props.obj.price}</td>
                <td><button className="btn btn-primary"

                            onClick={() => {

                                value.addToCart(this.props.obj.id);

                            }}> {this.props.inCart?(<p className="text-capitalize mb-0"
                                            disabled> inCart</p>):(<i className="fas fa-cart-plus"/>)}

                </button></td>
                {/*<td><Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link></td>*/}
                <td><button className="btn btn-danger" onClick={() => {


                    axios.get('http://localhost:8001/user/delete/'+ this.props.obj._id).then(res => console.log(res.data));


                }}>Delete</button></td>


            </tr>

                )}
            </ProductConsumer>


        );}
    // }


}

export default TableRow;