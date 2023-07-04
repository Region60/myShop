import { Box } from "@mui/material"
import React from "react"
import "tailwindcss/tailwind.css"


interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <>
      <Box  className="w-full mt-8 h-32 bg-[#1976d2]"></Box>
    </>
  )
}

export default Footer
