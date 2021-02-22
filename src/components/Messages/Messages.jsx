import { Component, Fragment } from 'react';

class Messages extends Component {
    // useState
    state = {
        messages: ['Hello world', 'How are you?'],
    };

    addMessage = () => {
        this.setState({ messages: [...this.state.messages, 'Whassap?'] });
    };

    // useEffect => didMount, didUpdate, willUnmount
    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.messages.length % 2 === 1) {
            setTimeout(() => {
                this.setState({
                    messages: [...this.state.messages, 'I am just robot'],
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
                        <Message key={index} text={item} />
                    ))}
                </div>

                <button onClick={this.addMessage}>Send message</button>
            </Fragment>
        );
    }
}

const Message = (props) => {
    return <div className='my-class'>{props.text}</div>;
};

export { Messages };
