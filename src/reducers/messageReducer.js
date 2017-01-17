import * as Type from '../actions/Type';
import initialState from '../initialState';

export default (state = initialState.message, action) => {
    switch (action.type) {
        case Type.SET_MESSAGES:
            return Object.assign({}, state, {
                mainTitle: action.messages.mainTitle,
                secondTitle: action.messages.secondTitle,
                description: action.messages.description,
                reference: action.messages.reference
            });
        default:
            return state;
    }
}