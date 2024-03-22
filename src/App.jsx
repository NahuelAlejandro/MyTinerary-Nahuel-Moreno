import  Home  from "./views/Home";
import  Cities  from "./views/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from "./views/City";
import { useDispatch } from "react-redux";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import authQueries from "./sevice/authQueries";
import alerts from "./utils/alerts";
import { logIn } from "./redux/actions/userActions";

function App() {
  const dispatch = useDispatch()
 
  useEffect(()=>{
    authQueries.loginWithToken().then((response)=>{
      if(response.status == 200){
        dispatch(logIn(response.data))
        alerts.success(`welcome ` + response.data.first_name)
      }
    });
  },[])

  return (
   
      <BrowserRouter>
          <Routes>
            <Route path ="/" element = {<Home/>}/>
            <Route path ="Cities" element = {<Cities/>}/>
            <Route path ="Cities/:id" element = {<City/>}/>
            <Route path ="/SignUp" element = {<SignUp/>}/>
            <Route path ="/Login" element = {<Login/>}/>
          </Routes>
        <ToastContainer/>
      </BrowserRouter>
    
  )
}

export default App;
