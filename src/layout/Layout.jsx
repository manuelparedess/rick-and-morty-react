import React from 'react'
import NavBar from '../components/ui/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/ui/Footer'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout