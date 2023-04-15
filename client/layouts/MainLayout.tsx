import React, { ReactNode } from 'react'
import NavBar from '../components/NavBar'

interface BaseLayoutProps {
    children?: ReactNode;
  }

const MainLayout: React.FC<BaseLayoutProps> = ({children})=>{
    return(
        <>
          <NavBar/>
          {children}
        </>
       
    )
}

export default MainLayout