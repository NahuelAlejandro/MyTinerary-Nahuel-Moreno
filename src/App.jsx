import  Home  from "./views/Home";
import  Cities  from "./views/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
 

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="Cities" element = {<Cities/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;
