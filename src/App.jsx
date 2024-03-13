import  Home  from "./views/Home";
import  Cities  from "./views/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from "./views/City";


function App() {
 

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="Cities" element = {<Cities/>}/>
          <Route path ="Cities/:id" element = {<City/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;
