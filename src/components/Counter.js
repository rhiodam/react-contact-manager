// import cx from 'classnames';
import React,  { Component } from 'react';

export default class Counter extends Component {
    
    state = {
        count: 42
    };
    handleClick = () => {
        this.setState(({ count }) => ({
            count: count + 1
        }));
    };
  
  
    render() {
        return (
            <div>
                <div>
                    <h2>Counter</h2>
                </div>
                <style>{`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}</style>
                
                <h2>{this.state.count}</h2>
            
            <button onClick={this.handleClick} className="counter-button">Click</button>
            </div>
        );
    }
}