import {AUTH_LOGIN} from "../Actions/AuthAction.ts";

const initialState = {
    user: {
        isLoggedIn:false
    }
};
export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTH_LOGIN:
            console.log(action.payload,'payload')
            return {
                ...state, user: action.payload
            }
        default:
            return state
    }
}
export default AuthReducer;