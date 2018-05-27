import { state } from './Repository';
import {root} from './index';

export function setValue(name) {
    return function(event) {
        const newValue = event.target.value;
        console.log("setting", name, "to", newValue);
        state[name] = newValue;
        console.log(root);
        root.forceUpdate();
    };
}

// Calling forceUpdate() on the root causes the email component to re-render
// TODO try it with setState() on the root
// TODO try it with immutable.js
