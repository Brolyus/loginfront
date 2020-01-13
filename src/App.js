import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Home'
import Secret from './Secret'
import axios from 'axios'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: 'Loading...',
            email: '',
            password: '',
            token: null,
            loggedIn: false
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/home')
            .then(res => res.text())

            .then(res => this.setState({ message: res }))
    }

    handleToken = () => {
        if (this.state.token !== null) {
            this.setState({
                loggedIn: true
            })
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        axios
            .post('http://localhost:8080/api/home', {
                email: this.state.email,
                password: this.state.password
            })
            .then(data =>
                this.setState({
                    token: data.data.token
                })
            )
            .then(() => this.handleToken())
    }

    render() {
        return (
            <div style={{ backgroundColor: 'darkgrey' }}>
                <ul>
                    <li>
                        <Link
                            to={{
                                pathname: '/',
                                state: {
                                    ...this.state,
                                    handleToken: this.handleToken,
                                    handleSubmit: this.handleSubmit,
                                    handleChange: this.handleChange
                                }
                            }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/secret'>Secret</Link>
                    </li>
                </ul>
                <Switch>
                    <Route
                        exact
                        path='/'
                        render={() => (
                            <Home
                                {...this.state}
                                handleToken={this.handleToken}
                                handleSubmit={this.handleSubmit}
                                handleChange={this.handleChange}
                            />
                        )}
                    />
                    {/* {this.state.loggedIn ? (
                            <Redirect to='/secret' />
                        ) : (
                            <Home />
                        )}
                    </Route> */}
                    <Route path='/secret' component={Secret} />
                </Switch>
            </div>
        )
    }
}
