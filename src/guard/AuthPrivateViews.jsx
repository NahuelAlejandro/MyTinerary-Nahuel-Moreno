import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const AuthPrivateViews = () => {
    
    const user = useSelector((store)=> store.users.user)

    return (
      user.last_name ? <Outlet/> : <Navigate to ={"/"}/> 
    )
}

export default AuthPrivateViews