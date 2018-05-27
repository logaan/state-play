import React, { Component } from 'react';
import './App.css';
import { setUserName, setEmail, setPassword } from './Controller';
import { getState } from './Repository';

class App extends Component {
    render() {
        console.log("rendering App");
        return <Form {...getState()} />;
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
