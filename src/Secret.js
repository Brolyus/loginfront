import React, { Component } from 'react'

export default class Secret extends Component {
    constructor(props) {
        super(props)
        //Set default message
        this.state = {
            message: 'Loading...'
        }
    }
    componentDidMount() {
        //GET message from server using fetch api
        fetch('http://localhost:8080/api/secret')
            .then(res => res.text())
            .then(res => this.setState({ message: res }))
    }
    render() {
        return (
            <div>
                <h1>Secret</h1>
                <p>{this.state.message}</p>
            </div>
        )
    }
}
