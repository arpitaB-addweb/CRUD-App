import React, { Component } from 'react';

import InputField from './Inputfield';
import Button from './Button';

export default class Main extends Component {

    state = {
        text: '',
        number: '',
        email: '',
    };

    handleChange = (key) => (value) => {
        this.setState({ [key]: value });
    };

    handleClick = (event) => {
        event.preventDefault();
    };

    render() {
        const { name, number, email } = this.state;

        return (
            <div className="container">
                <h2>React Reusable Component</h2>
                <InputField
                    value={name}
                    type='name'
                    placeholder='Enter Name'
                    onChange={this.handleChange('name')} />
                    <br/>

                <InputField
                    value={number}
                    type='text'
                    placeholder='Enter Number!'
                    onChange={this.handleChange('number')} />
                    <br/>

                <InputField
                    value={email}
                    type='text'
                    placeholder='Enter Email!'
                    onChange={this.handleChange('email')} />
                    <br/>

                <Button
                    onClick={this.handleClick}
                    value='Submit'/>
            </div>
        );
    }
}