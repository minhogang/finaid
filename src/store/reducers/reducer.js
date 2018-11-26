import * as actionTypes from '../actions/actionTypes';

const initialState = {
    default_value: 2
}

const addValue = (state, action) => {
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