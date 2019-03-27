import React, {Component} from 'react';

class LifecycleMethodTest extends Component {

    state = {
        title: '',
        body: ''
    }

    componentDidMount() {
        console.log('LifecycleMethodTest... componentDidMount')

        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(res =>
                this.setState({
                    title: res.title,
                    body: res.body
                })
            )
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
                <h2>Post</h2>
                <p>{this.state.title}</p>
                <p>{this.state.body}</p>
            </div>
        );
    }
}

export default LifecycleMethodTest;