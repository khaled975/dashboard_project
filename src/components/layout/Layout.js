import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
const Layout = ()=>{
    const auth = localStorage.getItem('user')
    return(
        <>
            <Sidebar/>
            <Outlet/>
            {/* {
                auth ? <Outlet/> : <Navigate to='/login'/>
            } */}
            
        </>
    )
}

export default Layout 