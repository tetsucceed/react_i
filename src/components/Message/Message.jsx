
import { Component } from 'react';
import { MessageField } from "../MessageField";

class Message extends Component {
    constructor(props) {
        super(props);

        this.state = {
            msg: this.props.text,
            author: this.props.author,
        }
    }

    render() {
        return (
                <MessageField items={this.state} />
        );
    }
}

export { Message };
