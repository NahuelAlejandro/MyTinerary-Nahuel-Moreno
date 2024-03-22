import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AuthPublicViews = () => {
    
    const user = useSelector((store)=> store.users.user)


  return (
    user.last_name ? <Navigate to ={"/"}/>: <Outlet/>
  )
}

export default AuthPublicViews