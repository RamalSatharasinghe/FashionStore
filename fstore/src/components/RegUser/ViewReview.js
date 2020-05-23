import React, {Component} from 'react';

class ViewReview extends Component {
    render() {
        return (
            <div>
                <h4>Product Reviews: </h4><p>{this.props.obj.ratingValue}</p>
            </div>
        );
    }
}

export default ViewReview;