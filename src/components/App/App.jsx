import { Component } from 'react';
import { Messages } from '../Messages';

class App extends Component {
    state = {
        count: 0,
        isShowMessages: true,
    };

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    };

    toggleMessages = () => {
        this.setState({ isShowMessages: !this.state.isShowMessages });
    };

    render() {
        console.log('App render');
        return (
            <div id='test-id'>
                <h2>Hello from React</h2>
                <button onClick={this.toggleMessages}>Toggle Messages</button>
                {/* {this.state.isShowMessages ? (
                    <Messages
                        messages={['First', 'second']}
                        count={this.state.count}
                        handleClick={this.handleClick}
                    />
                ) : null} */}
                {this.state.isShowMessages && (
                    <Messages
                        id='messages'
                        className='messages-class'
                        messages={['First', 'second']}
                        count={this.state.count}
                        handleClick={this.handleClick}
                    />
                )}
            </div>
        );
    }
}
// const App = () => {

//     return (
//         <div id='test-id'>
//             <h2>Hello from React</h2>
//             <Messages messages={['First', 'second']} />
//         </div>
//     );
// };

export { App };
