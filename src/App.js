import React, { Component } from 'react';
import './App.css';
import { setValue } from './Controller';
import { state } from './Repository';

class App extends Component {
  render() {
    return <Form {...state} />;
  }
}

function Form({name, age, email}) {
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

            <p>
                <label>
                    Email:<br />
                    <input name="email" value={email}/>
                </label>
            </p>
        </div>
    );
}

export default App;
