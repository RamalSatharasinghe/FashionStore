import React, {Component} from 'react';
import men1 from "../images/m1.jpg";
import men2 from "../images/m2.jpg";
import men3 from "../images/m3.jpg";
import women1 from "../images/w4.jpg";
import women2 from "../images/w5.jpg";
import women3 from "../images/w6.jpg";
import sport1 from "../images/g1.jpg";
import sport2 from "../images/g2.jpg";
import sport3 from "../images/g3.jpg";

class HomeComponent extends Component {


    constructor(props){
        super(props);
        this.State = {



        }
        const detailsProduct ={

            id:1,
            title:"Mens Casual Shirt",
            img:"./images/m1.jpg",
            price:"Rs: 3,650.00",
            inCart:false,
            count:0,
            total:0




        };


    }
    render() {
        return (
            <div>
                <div className="container">
                    <h3>Men</h3><br/>

                    <div className="row">

                        <div className="col">
                            <img src={men1} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                        <div className="col">
                            <img src={men2} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                        <div className="col">

                            <img src={men3} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                    </div> <br/>

                    <h3>Women</h3><br/>

                    <div className="row">

                        <div className="col">
                            <img src={women1} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                        <div className="col">
                            <img src={women2} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                        <div className="col">

                            <img src={women3} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                    </div>

                    <br/>

                    <h3>Girls</h3><br/>

                    <div className="row">

                        <div className="col">
                            <img src={sport1} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                        <div className="col">
                            <img src={sport2} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                        <div className="col">

                            <img src={sport3} className="img-rounded" alt="Cinque Terre"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeComponent;