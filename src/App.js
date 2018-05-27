import React, { Component } from 'react';
import './App.css';
import { setUserName, setEmail, setPassword } from './Controller';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'lcampbell',
            email: 'lcampbellmcpherson@zendesk.com',
            password: 'password123'
        };
    }

    render() {
        console.log("rendering App");
        return <Form {...this.state} />;
    }
}

function Form({userName, email, password}) {
    console.log("rendering Form");
    return (
        <div className="App">
            <UserName value={userName} />
            <Email value={email} />
            <Password value={password} />
        </div>
    );
}

function UserName({ value }) {
    return (<p>
        <label>
            User name:<br />
            <input name="userName"
                   value={value}
                   onChange={setUserName} />
        </label>
    </p>);
}

function Email({ value }) {
    console.log("rendering Email");
    return (
        <p>
            <label>
                Email:<br />
                <input
                    name="email"
                    value={value}
                    onChange={setEmail} />
            </label>
        </p>
    );
}

function Password({ value }) {
    console.log("rendering Password");
    return (
        <p>
            <label>
                Password:<br />
                <input
                    name="password"
                    value={value}
                    onChange={setPassword} />
            </label>
        </p>
    );
}

export default App;
