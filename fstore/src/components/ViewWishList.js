import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
class ViewWishList extends Component {

    constructor(props){
        super(props);
        this.state = {product : []};

    }

    componentDidMount(){

        axios.get('http://localhost:4001/user')
            .then(response => {
                this.setState({product : response.data})
            })
            .catch(function(err){

                console.log(err)
            })
    }

    tabRow(){


        return this.state.product.map(function(object,i){

            return <TableRow obj={object} key={i}/>
        })
    }
    render() {
        return (


            <div>
                    <h3 align="center">Wish List</h3>
                    <table className="table table-striped" style={{marginTop:20}}>
                        <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>price</th>
                            {/*<th colSpan="2">Action</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </div>

        );
    }
}

export default ViewWishList;