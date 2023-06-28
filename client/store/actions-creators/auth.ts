import { IsAuthActionType, AuthActionType } from "../../types/auth"
import { Dispatch } from "react"
import axios from "axios"
import endpoints from "../../constants/endpoints"

export const login = (email: string, password: string) => {
  console.log({ email, password })

  return async (dispatch: Dispatch<IsAuthActionType>) => {
    try {
      const response = axios.post(endpoints.login, { email, password })
      const responseData = (await response).data
      localStorage.setItem("jwt", responseData.access_token)
      localStorage.setItem("user",responseData.userName )    
       dispatch({
        type: AuthActionType.IS_AUTH,
        payload: responseData,
      })
    } catch (error) {
      console.log({ error })
      dispatch({
        type: AuthActionType.FETCH_AUTH_ERROR,
        payload: "ошибка авторизации",
      })
    }
  }
}

