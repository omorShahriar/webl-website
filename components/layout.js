import { useState } from "react";
import Head from "next/head";
import Footer from "./Footer/Index";
import Navbar from "./NavBar";
import Sidebar from "./SideBar";
export default function Layout({ children }) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen); 
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        
            </Head>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            
            <main>{children}</main>
            <Footer/>
        </>
    )
}