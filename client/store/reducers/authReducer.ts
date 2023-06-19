import { AuthState, AuthActionType, IsAuthActionType } from "./../../types/auth"

const initialSatte: AuthState = {
  userName: "Гость",
  isAuth: false,
  error:""
}

export const authReducer = (
  state = initialSatte,
  action: IsAuthActionType
): AuthState => {
  switch (action.type) {
    case AuthActionType.IS_AUTH:
      return {
        ...state,
        userName: action.payload.userName,
        isAuth: true,
      }
    case AuthActionType.FETCH_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      }

    default:
      return state
  }
}
