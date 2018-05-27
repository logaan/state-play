import { getState, swapState } from './Repository';

export function setValue(name) {
    return async function(event) {
        const newValue = event.target.value;
        console.log("initial state", getState());

        console.log("setting", name, "to", newValue);
        swapState(state => {
            state[name] = newValue;
            return state;
        });

        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const json = await response.json();
        console.log("json", json);
        console.log("after response state", getState());
        console.log("changedSinceInitial?", getState());

    };
}
