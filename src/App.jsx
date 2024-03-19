import  Home  from "./views/Home";
import  Cities  from "./views/Cities";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import City from "./views/City";
import store from "./redux/store";
import { Provider } from "react-redux";


function App() {
 

  return (
   
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path ="/" element = {<Home/>}/>
            <Route path ="Cities" element = {<Cities/>}/>
            <Route path ="Cities/:id" element = {<City/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    
  )
}

export default App;
