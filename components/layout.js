import { useState } from "react";
import Footer from "./Footer/Index";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen); 
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <main>{children}</main>
            <Footer/>
        </>
    )
}