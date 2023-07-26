import React from "react"
import endpoints from "@/constants/endpoints"
import { useInput } from "@/hooks/useInput"
import MainLayout from "@/layouts/MainLayout"
import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/router"
import "tailwindcss/tailwind.css"
import { Phone } from "@mui/icons-material"

const Register: React.FC = () => {
  const email = useInput("")
  const userName = useInput("")
  const userPassword = useInput("")
  const passwordRepeat = useInput("")
  const phone = useInput("")
  const router = useRouter()

  const login = () => {
    const formData = {
      email: email.value,
      userPassword: userPassword.value,
      userName: userName.value,
      phone: phone.value,
      confirmRegister: "",
    }
    axios
      .post('http://localhost:5000/users',formData)
      .then((resp) => router.push("/register/registerSucess"))
      .catch((e) => console.log(e))
  }

  return (
    <>
      <MainLayout>
        <div className="flex justify-center mt-32">
          <div>
            <div className="flex flex-col justify-between h-96">
              <TextField
                {...userName}
                id="outlined-basic"
                label="Имя пользователя"
                variant="outlined"
              />
              <TextField
                {...email}
                id="outlined-basic"
                label="email"
                variant="outlined"
              />
              <TextField
                {...userPassword}
                id="outlined-basic"
                label="Пароль"
                variant="outlined"
              />
              <TextField
                {...passwordRepeat}
                id="outlined-basic"
                label="Повтор пароля"
                variant="outlined"
              />
              <TextField
                {...phone}
                id="outlined-basic"
                label="Номер телефона"
                variant="outlined"
              />
            </div>
            <Button className="mt-2" onClick={login}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default Register
