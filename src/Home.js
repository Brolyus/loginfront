import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>{this.props.message}</p>
                <br />
                <div className='LoginForm'>
                    <h1>CONNEXION</h1>

                    <form onSubmit={this.props.handleSubmit}>
                        <fieldset>
                            <div className='form-data'>
                                <label htmlFor='email'>E-MAIL</label>
                                <input
                                    type='text'
                                    id='email'
                                    placeholder='Enter your email'
                                    name='email'
                                    onChange={this.props.handleChange}
                                    value={this.props.email}
                                />
                            </div>

                            <div className='form-data'>
                                <label htmlFor='password'>PASSWORD</label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='Enter your password'
                                    name='password'
                                    onChange={this.props.handleChange}
                                    value={this.props.password}
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
