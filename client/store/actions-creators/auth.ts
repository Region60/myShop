import { IsAuthActionType, AuthActionType } from "../../types/auth"
import { Dispatch } from "react"
import axios from "axios"
import endpoints from "../../constants/endpoints"
import { useLocalStorage } from "@/hooks/useLocalStorage"

export const auth = (email: string, password: string) => {
  console.log({email,password})

  return async (dispatch: Dispatch<IsAuthActionType>) => {
    try {
      const response = axios.post(endpoints.login, { email, password })
      const responseData = (await response).data
      useLocalStorage("jwt", responseData.access_token)
        return dispatch({
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
