import React, { ReactNode } from "react"
import NavBar from "../components/NavBar"
import Footer from "@/components/Footer"

interface BaseLayoutProps {
  children?: ReactNode
}

const MainLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col justify-between  h-screen">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
