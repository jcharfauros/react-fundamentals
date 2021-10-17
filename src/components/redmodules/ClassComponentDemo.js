import React, { Component } from 'react';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        // this.state = { simpleMessage: 'Welcome user!!' };
        // this.state = { count: 0 };
        this.state = { incrementCount: 0, decrementCount: 0 };
    }

    incrementCount = () => {
        // console.log("increment called");
        this.setState (
            // { count: this.state.count + 1 }
            { incrementCount: this.state.incrementCount + 1 }
        );
    };

    decrementCount = () => {
        this.setState(
            { decrementCount: this.state.decrementCount - 1 }
        );
    };

    render() {
        console.log("render called");
        return (
            <div className='main'>
                <div className='mainDiv'>
                    <ClassComponentNotes />
                    <hr />
                    <h1>Like it!</h1>
                    <h4>
                    <button onClick={this.incrementCount}>
                        <FiThumbsUp />
                        {this.state.incrementCount}                        
                    </button>
                    </h4>
                    <h1>Dislike it!</h1>
                    <h4>
                    <button onClick={this.decrementCount}>
                        <FiThumbsDown />
                       {this.state.decrementCount}
                    </button>
                    </h4>
                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>Class components are consisdered the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>Class components need to extend the React Component.</dt>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    );
};

// render() {
//     console.log("render called");
//     return (
//         <div className='main'>
//             <div className='mainDiv'>
//                 <ClassComponentNotes />
//                 <hr />
//                 <h3>Smash that like button!</h3>
//                 <button onClick={this.incrementCount}>
//                     Likes: {this.state.count}
//                 </button>
//                 <h3>You dislike?</h3>
//                 <button onClick={this.dislikeCount}>
//                     Dislikes: {this.state.count}
//                 </button>
//                 {/* <h4>
//                     {this.state.simpleMessage}
//                 </h4> */}
//             </div>
//         </div>
//     );
// }
// }