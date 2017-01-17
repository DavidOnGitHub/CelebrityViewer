import * as Type from './Type';

export function setCelebrityList(list) {
    return {
        type: Type.SET_CELEBRITY_LIST,
        list
    };
}