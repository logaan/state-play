import { root } from './index';

var state = {
    name: "Logan Campbell",
    age: 30,
    email: "lcampbellmcpherson@zendesk.com"
};

export function getState() {
    return state;
}

export function swapState(updateFunction) {
    state = updateFunction(state);
    root.forceUpdate();
}

export function resetState(newState) {
    state = newState;
    root.forceUpdate();
}
