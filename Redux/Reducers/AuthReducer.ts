import {AUTH_LOGIN} from "../Actions/AuthAction.ts";
import {act} from "react-test-renderer";

const initialState = {
    user: {}
};
export const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case AUTH_LOGIN:
            return {
                ...state, user: action.payload
            }
        default:
            return state
    }
}
export default AuthReducer;