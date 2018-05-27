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
