import { root } from './index';
import { isEqual } from 'lodash';

function deepClone(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone));
}

export async function setUserName(event) {
    const newValue = event.target.value;
    const initialState = deepClone(root.state);
    console.log("initial state", initialState);

    console.log("setting username to", newValue);
    root.setState(state => {
        state['userName'] = newValue;
        return state;
    });

    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    await response.json();

    const newState = root.state;
    console.log("same as initial?",
                isEqual(initialState, newState),
                initialState,
                newState);
}

export function setEmail() {};
export function setPassword() {};
