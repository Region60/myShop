import "tailwindcss/tailwind.css"
import React from "react"
import MainLayout from "../layouts/MainLayout"

const Home: React.FC = () => {
  return (
    <>
      <div className="h-screen">
        <MainLayout></MainLayout>
      </div>
    </>
  )
}

export default Home
