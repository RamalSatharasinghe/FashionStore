import React, {Component} from 'react';

class AlertMessage extends Component {
    render () {
        return(
            <div className="alert alert-danger" role="alert">
                <strong>Warning!</strong> Edit Failed. Field is empty or category already exists by the same name.
            </div>
        );
    }
}

export default AlertMessage;