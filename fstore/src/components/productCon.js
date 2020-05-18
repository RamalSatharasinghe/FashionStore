import React, {Component} from 'react';
import Details from "./details";

import axios from 'axios';
class ProductCon extends Component {

    constructor(props){
        super(props);
        this.state = {product : []};

    }

    componentDidMount(){

        axios.get('http://localhost:4001/user/'+'${ 5eba68dbb384760894286c89}')
            .then(response => {
                this.setState({product : response.data})
            })
            .catch(function(err){

                console.log(err)
            })
    }

    tabRow(){


        return this.state.product.map(function(object,i){

            return <Details obj={object} key={i}/>
        })}



    render() {
        return (
            <div>
                <p>Our Products</p>
                {this.tabRow()}
            </div>
        );
    }
}

export default ProductCon;