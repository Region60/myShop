import endpoints from "@/constants/endpoints"
import { useInput } from "@/hooks/useInput"
import useIsAuth from "@/hooks/useIsAuth"
import MainLayout from "@/layouts/MainLayout"
import { LocalStorageConstantsType } from "@/types/auth"
import { Button, TextField, Link } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router"
import "tailwindcss/tailwind.css"

const Auth = () => {
  const email = useInput("")
  const password = useInput("")
  const router = useRouter()
  const [user, setUser] = useIsAuth()
  

  const login = async () => {
    try {
      const response = axios.post(endpoints.login, {
        email: email.value,
        password: password.value,
      })
      const responseData = (await response).data
      window.localStorage.setItem(
        LocalStorageConstantsType.JWT,
        responseData.access_token
      )
      // window.localStorage.setItem(
      //   LocalStorageConstantsType.USER_IS_AUTH,
      //   responseData.userName
      // )
        setUser(responseData.userName)
        router.push("/")
        
      
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <>
      <MainLayout>
        <div className="flex justify-center mt-32">
          <div>
            <div>
              <TextField
                {...email}
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
              <TextField
                {...password}
                id="outlined-basic"
                label="Пароль"
                variant="outlined"
              />
            </div>
            <Button className="mt-2" onClick={login}>
              Войти
            </Button>
            <div className=" flex justify-center">
              <Link href={"./register"}>Регистрация</Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Auth
