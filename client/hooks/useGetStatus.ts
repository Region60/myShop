import { LocalStorageConstantsType } from "@/types/auth"
import { useEffect, useState } from "react"
export const useGetUserStatus = () => {
  if (typeof window !== "undefined") {
    const [userIsAuth, setUserIsAuth] = useState("")

    useEffect(() => {
      const user = JSON.stringify(
        localStorage.getItem(LocalStorageConstantsType.USER_IS_AUTH)
      )

      setUserIsAuth(user)
    })
    return userIsAuth
  }
}
