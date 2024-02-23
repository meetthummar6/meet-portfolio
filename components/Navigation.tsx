"use client"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import { useState} from "react"
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
  return (
    <>
        <Navbar toggle={toggle} isOpen={isOpen}/>
        <Sidebar toggle={toggle} isOpen={isOpen}/>
    </>
  )
}

export default Navigation