
import { Component } from 'react';

class MessageField extends Component {
    constructor(props) {
        super(props);
        const today = new Date();
        const hour = today.getHours();
        const minutes = today.getMinutes();

        this.state = {publishDate: `${hour}:${minutes}`}
    }

    render() {
        return (
            <div>
            <div>{this.state.publishDate} Author: {this.props.items.author}</div>
            <div> {this.props.items.msg} </div>
            </div>
        );
    }
}

export { MessageField };
