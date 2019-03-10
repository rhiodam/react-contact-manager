import React, {Component} from 'react';

class LifecycleMethodTest extends Component {

    componentDidMount() {
        console.log('LifecycleMethodTest... componentDidMount')
    }

    // 1
    componentWillMount() {
        console.log('LifecycleMethodTest... componentWillMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleMethodTest... componentDidUpdate')
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleMethodTest... getSnapshotBeforeUpdate')
    }



    render() {
        return (
            <div>
                <h1>LifecycleMethodTest Component</h1>
            </div>
        );
    }
}

export default LifecycleMethodTest;