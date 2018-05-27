import React, { Component } from 'react';
import './App.css';
import { setValue } from './Controller';
import { getState } from './Repository';

class App extends Component {
    render() {
        console.log("rendering App");
        return <Form {...getState()} />;
    }
}

function Form({name, age, email}) {
    console.log("rendering Form");
    return (
        <div className="App">
            <p>
                <label>
                    Name:<br />
                    <input name="name"
                           value={name}
                           onChange={setValue('name')} />
                </label>
            </p>

            <p>
                <label>
                    Age:<br />
                    <input name="age" value={age}/>
                </label>
            </p>

            <EmailField value={email} />
        </div>
    );
}

function EmailField({ value }) {
    console.log("rendering EmailField");
    return (
        <p>
            <label>
                Email:<br />
                <input name="email" value={value}/>
            </label>
        </p>
    );
}

export default App;
