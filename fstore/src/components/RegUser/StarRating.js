import React, {useState} from "react";
import {FaStar} from "react-icons/all";
import axios from "axios";

const StarRating = (props) =>{

    // constructor(props)
    // {
    //     // super(props);
    // }

        const [rating, setRating] =useState(null);
    const [hover, setHover] =useState(null);
    return <div>
        {[...Array(5)].map((star,i) => {

            const  ratingValue = i + 1;

            return <label>
                <input type="radio" name="rating" value={ratingValue} onClick={() =>{
                setRating(ratingValue);
                    const obj = {

                       // id:1,
                        ratingValue:ratingValue,
                        email:'abc@gmail.com'
                    }
                        axios.post('http://localhost:8001/user/addReview',obj).then(res => console.log(res.data));

                }}
                />

                <FaStar className="star" color={ratingValue <= (hover || rating)?"#ffc107" : "#e4e5e9"} size={25}
                onMouseOver={() => setHover(ratingValue)}
                onMouseOut ={() => setHover(null)}
                /></label>;

        })
        }
        </div>
}
export  default  StarRating