import * as Type from './Type';

export function setMessages(messages) {
    return {
        type: Type.SET_MESSAGES,
        messages
    }
}
