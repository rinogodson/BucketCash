import React, {useContext} from "react"

import { Navigate, useLocation } from "react-router-dom"

import AuthContext from "./context/AuthContext"

function ProtectedRoute({children}) {
  const {token, isLoading} = useContext(AuthContext)

  const location = useLocation()
  

  if(!token){
    console.log("Not Logged in!")
    return <Navigate to="/" state={{from: location}} replace />
  }



  return (
    children  
  )
}

export default ProtectedRoute
