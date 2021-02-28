import { Component, Fragment } from 'react';
import { Message } from "../Message";

class Messages extends Component {
    // useState
    state = {
        messages: [
            {id: 0, msg: 'Test message 0', author: "Bugga"},
            {id: 1, msg: 'Test message 1', author: "Lugga"}
            ],
    };

    addMessage = () => {
        this.setState({ messages: [...this.state.messages, {msg: 'Whassap?', author: 'anonymous'}] });
    };

    // useEffect => didMount, didUpdate, willUnmount
    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, {msg:'I am just robot', author:'ROBOT'}],
                });
            }, 1000);
        }
    }

    render() {
        console.log('render', this.state);
        const { messages = [] } = this.state;

        return (
            <Fragment>
                <div className='messages'>
                    {messages.map((item, index) => (
                        <Message key={index} message_id={index} text={item.msg} author={item.author} />
                    ))}
                </div>

                <button onClick={this.addMessage}>Send message</button>
            </Fragment>
        );
    }
}

export { Messages };
