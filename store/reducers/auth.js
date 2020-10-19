import { EMAILLOGIN, EMAILSIGNUP } from '../actions/auth';

const initialState = {
    token: null,
    userId: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAILLOGIN:
            return {
                token: action.token,
                userId: action.userId
            };
        case EMAILSIGNUP:
            return {
                token: action.token,
                userId: action.userId
            };





        default:
            return state;
    }
};

