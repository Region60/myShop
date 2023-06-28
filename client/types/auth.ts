export interface AuthState {
  userName: string
  isAuth: boolean,
  error?: string
}

export enum LocalStorageConstantsType {
  JWT = "JWT",
  USER_IS_AUTH = "USER_IS_AUTH"
}

export enum AuthActionType {
  IS_AUTH = "IS_AUTH",
  FETCH_AUTH_ERROR = "FETCH_AUTH_ERROR"

}

type AuthPayload = {
  userName: string
  isAuth: boolean
}

interface IsAuthAction {
  type: AuthActionType.IS_AUTH
  payload: AuthPayload
}

interface FetchAuthErrorAction {
  type: AuthActionType.FETCH_AUTH_ERROR
  payload?:string
}

export type IsAuthActionType = IsAuthAction | FetchAuthErrorAction
