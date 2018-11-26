import * as actionTypes from './actionTypes';

export const addValue = (value) => {
    return {
        type: actionTypes.ADDVALUE,
        value: value
    }
}