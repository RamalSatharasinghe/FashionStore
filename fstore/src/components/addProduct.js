import React, {Component} from 'react';
import axios from 'axios';

class AddProduct extends Component {

    constructor(props){
        super(props);

        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
        this.onChangeNICNumber = this.onChangeNICNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.State = {

            product_name : '',
            description : '',
            price : ''

        }
    }


    onChangePersonName(e){
        this.setState({

            product_name: e.target.value
        });

    }

    onChangeBusinessName(e){
        this.setState({

            description: e.target.value
        });

    }

    onChangeNICNumber(e){
        this.setState({
            price: e.target.value

        });

    }

    onSubmit(e){

        e.preventDefault();
        const obj = {

           product_name:this.state.product_name,
            description : this.state.description,
            price: this.state.price
        };


        axios.post('http://localhost:4001/user/addproduct',obj).then(res => console.log(res.data));

        this.setState({
            product_name:'',
            description:'',
            price:''
        })

    }






    render(){
        return(

            <div style={{marginTop : 10}}>
                <h3>Add New Business</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Add Product Name: </label>
                        <input type="text" className="form-control"
                               value={this.props.product_name}
                               onChange={this.onChangePersonName}/>
                    </div>

                    <div className="form-group">
                        <label>Add Product Description: </label>
                        <input type="text" className="form-control" value = {this.props.description} onChange={this.onChangeBusinessName}/>
                    </div>

                    <div className="form-group">
                        <label>Add Price: </label>
                        <input type="text" className="form-control" value = {this.props.price} onChange={this.onChangeNICNumber}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );



    }
}

export default AddProduct;