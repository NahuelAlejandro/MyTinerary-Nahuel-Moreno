import { useState } from 'react'
import LayoutMain from './LayoutMain'
import { Link, useNavigate,  } from "react-router-dom";
import authQueries from'../sevice/authQueries'
import alerts from '../utils/alerts';
import { logIn } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {
    
const navigate = useNavigate()

const dispatch= useDispatch()

const [formData, setFormData] = useState({
    email: "",
    password:""
})

function handleInput(e) {
    const key = e.target.name;
    const value = e.target.value;
    const aux = {...formData};
    aux[key] = value;
    setFormData(aux);
}

function handleSubmit(e) {
    e.preventDefault();
   
   const aux = {...formData}
    
    for (const key in aux) {
        if (!aux[key]) delete aux[key];
    }
    
    authQueries.login(aux).then((response) => {
        if (response.status == 200){
            alerts.success(`welcome ` + response.data.first_name)
            dispatch(logIn(response.data))
            navigate("/")
        }else{
            alerts.error(response.statusMsg)
        }
    })
}

  return (
    <LayoutMain>
        <main className='grow min-h-screen flex justify-center items-center py-10 bg-cover bg-no-repeat bg-center bg-[url("/log-in-image.png")]'>
            <section className='w-11/12 bg-black flex flex-col gap-5 border-2 items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-sky-600 shadow-lg shadow-sky-700 py-3 rounded md:w-2/4 lg:w-2/5 xl:w-1/4'>
                <h3 className='font-semibold text-2xl text-sky-400 md:text-4xl '>Log In</h3>
                <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit} onInput={handleInput}>
                    <input className='outline-none rounded indent-2 w-full h-8' name='email' type="email" placeholder='Email'/>
                    <input className='outline-none rounded indent-2 font-semibold w-full h-8 ' name='password' type="password" placeholder='Password'/>
                    <input type="submit" value="Log In" className='w-4/5 px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-lg cursor-pointer' />
                </form>
                    <Link className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-lg' to="/SignUp">Create new count</Link>           
            </section>
        </main>
    </LayoutMain>
  )
}

export default Login