import React, {useCOntext} from "react"

import { Navigate, useLocation } from "react-router-dom"

import AuthContext from "../context/AuthContext"

function ProtectedRoute({children}) {
  const {token, isLoading} = useCOntext(AuthContext)
  const location = useLocation()

  if(!token){
    console.log("Protected Route: token not found")
    return <Navigate to="/" state={{from: location}} replace/>
  }
  return children
}

export default ProtectedRoute
