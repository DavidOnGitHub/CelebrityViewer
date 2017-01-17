import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.celebrities, action) => {
    switch (action.type) {
        case Type.SET_CELEBRITY_LIST:
            return [...action.list];
        default:
            return state;
    }
}