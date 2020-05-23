import React, {Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';
class ViewWishList extends Component {

    constructor(props){
        super(props);
        this.state = {product1 : []};

    }

    componentDidMount(){



        axios.get('http://localhost:8001/user/')
            .then(res => {
                this.setState({ product1: res.data});
                console.log(this.state.product1)
            })
            .catch(function(err){

                console.log(err)
            })
    }

    tabRow(){

        return this.state.product1.map(function(object,i){

            return <TableRow obj={object} key={i}/>
        })

        // return Object.keys(this.state.product1).map(function(object,i){
        //
        //     return <TableRow obj={object} key={i}/>
        // })
    }
    render() {
        //console.log(this.props.match.params.emial1)
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