import React, { Component } from 'react'

class Test extends Component {
    state = {
        title: '',
        body: ''
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then((json) => {
            console.log(json);
                this.setState({
                    title: json.title,
                    body: json.body
                });
            });
    }
    render() {
        const {title, body} = this.state;
        return (
            <div>
                <h1>Test</h1>
                <h3>{title}</h3>
                <p>{body}</p>
            </div>
        )
    }
}

export default Test;