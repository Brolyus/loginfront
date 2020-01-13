import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
    constructor(props) {
        super(props)
        //Set default message
        this.state = {
            message: 'Loading...',
            email: '',
            password: ''
        }
    }
    componentDidMount() {
        fetch('http://localhost:8080/api/home')
            .then(res => res.text())

            .then(res => this.setState({ message: res }))
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        axios
            .post('http://localhost:8000/home', {
                email: this.state.email,
                password: this.state.password
            })
            .then(response => {
                console.log('yes!', response.data)
            })
    }
    //essayer avec des données en dur

    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>{this.state.message}</p>
                <br />
                <div className='LoginForm'>
                    <h1>CONNEXION</h1>

                    <form onSubmit={this.handleSubmit}>
                        <fieldset>
                            <div className='form-data'>
                                <label htmlFor='email'>E-MAIL</label>
                                <input
                                    type='text'
                                    id='email'
                                    placeholder='Enter your email'
                                    name='email'
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </div>

                            <div className='form-data'>
                                <label htmlFor='password'>PASSWORD</label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter your password'
                                    name='password'
                                    onChange={this.handleChange}
                                    value={this.state.password}
                                    required
                                />
                            </div>

                            <hr />
                            <div className='form-data'>
                                <input type='submit' value='Login' />
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}
