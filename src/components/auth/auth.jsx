import React from "react"
import { Navigate } from "react-router-dom"

const Auth = ({Children})=>{
    const auth = localStorage.getItem('user')
    return  auth ? Children  : <Navigate to = '/login'/> 
        

    
}

export default Auth