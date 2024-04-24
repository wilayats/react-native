export const AUTH_LOGIN = 'AUTH_LOGIN'

class AuthAction {
    static login(data: any) {
        return {
            type: AUTH_LOGIN,
            payload: data
        }
    }
}

export default AuthAction