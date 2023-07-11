import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../tobbar/Tobbar";
import Numbers from "../numbers/Numbers";
import Stats from "../stats/Stats";
import Maps from "../maps/Maps";
import SignIn from "../sign/SignIn";
import Error from "../404/Error";
const MainLayout = ()=>{
    return(
        <>
            <main>
                <Topbar/>
                <Numbers/>
                <Stats/>
                <Maps/>
            </main>
        </>
    )
}

export default MainLayout