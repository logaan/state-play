import { root } from './index';

var state = {
    userName: 'lcampbell',
    email: 'lcampbellmcpherson@zendesk.com',
    password: 'password123'
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
