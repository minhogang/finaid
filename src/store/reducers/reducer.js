import * as actionTypes from '../actions/actionTypes';

const initialState = {
    default_value: 2
}

const addValue = (state, action) => {
    /* Do not mutate state directly, make a copy of the state using ES6 spread operator
    e.g. {...state}, make changes to the copy and then use the spread operator again
    to merge the two states. */
    const newState = {...state};
    newState.default_value += action.value;
    return {
        ...state,
        ...newState
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADDVALUE: return addValue(state, action);
        default: return state;
    }
}

export default reducer;