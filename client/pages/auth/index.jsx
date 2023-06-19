import endpoints from "@/constants/endpoints"
import { useInput } from "@/hooks/useInput"
import { useLocalStorage } from "@/hooks/useLocalStorage"
import MainLayout from "@/layouts/MainLayout"
import { auth } from "@/store/actions-creators/auth"
import { Button, TextField, Link } from "@mui/material"
//import Link from "next/link"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import "tailwindcss/tailwind.css"

const Auth = () => {
  const email = useInput("")
  const password = useInput("")
  const router = useRouter()
  //const dispatch = useDispatch()

  const login = () => {
     //dispatch(auth(email.value, password.value))
    //router.push("/")
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