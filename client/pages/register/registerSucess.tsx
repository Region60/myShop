import React from "react"
import MainLayout from "@/layouts/MainLayout"
import "tailwindcss/tailwind.css"
import Link from "next/link"

const RegisterSucess: React.FC = () => {
  return (
    <>
      <MainLayout>
        <div className="flex  justify-center mt-10">
          <div>
            <p className="text-xl">
              Письмо с подтверждением регистрации отправленно на ваш электронный
              адрес
            </p>
            <Link href={"/"}>На главную</Link>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default RegisterSucess
