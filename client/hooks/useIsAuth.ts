import { LocalStorageConstantsType } from "../types/auth"
import { useEffect, useState } from "react"


const useIsAuth = (): [string | null, (value: string) => void] => {
  const [value, setValue] = useState<string | null>(null)

  useEffect(() => {
    const storedValue = localStorage.getItem(
      LocalStorageConstantsType.USER_IS_AUTH
    )
    setValue(storedValue)
  })

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(LocalStorageConstantsType.USER_IS_AUTH, newValue)
    setValue(newValue)
  }

  return [value, setLocalStorageValue]
}

export default useIsAuth
