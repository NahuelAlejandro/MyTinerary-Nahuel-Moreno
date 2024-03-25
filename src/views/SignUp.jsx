import { useEffect, useState } from 'react'
import LayoutMain from './LayoutMain'
import { Link, useNavigate,  } from "react-router-dom";
import getCountries from '../sevice/countriesQueries';
import authQueries from'../sevice/authQueries'
import alerts from '../utils/alerts';

const SignUp = () => {
   
const [countries, setSountries] = useState([])

const navigate = useNavigate()

    useEffect(()=>{
        getCountries().then(setSountries)
    },[])

const [formData, setFormData] = useState({
    first_name:"",
    last_name: "",
    email: "",
    password:"",
    country:"",
    image: ""
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
    authQueries.register(aux).then((response) => {
        if (response.status == 201){
            alerts.success("Account Created successfully")
            navigate("/Login")
        }else{
            alerts.error(response.statusMsg)
        }
    })
}

  return (
    <LayoutMain>
        <main className='grow min-h-screen flex justify-center items-center py-10 bg-cover bg-no-repeat bg-center bg-[url("/sign-up-image.jpg")]'>
            <section className='w-11/12 bg-black flex flex-col gap-5 border-2 items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-sky-600 shadow-lg shadow-sky-700 py-3 rounded md:w-2/4 lg:w-2/5 xl:w-1/4'>
                <h3 className='font-semibold text-2xl text-sky-400 md:text-4xl '>Crete a new account</h3>
                <form className='flex flex-col items-center gap-4' onSubmit={handleSubmit} onInput={handleInput}>
                    <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8' name='first_name' type="text" placeholder='First Name'/>
                    <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8' name='last_name' type="text" placeholder='Last Name'/>
                    <input className='outline-none rounded indent-2 w-4/5 lg:h-8' name='email' type="email" placeholder='Email'/>
                    <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8' name='password' type="password" placeholder='Password'/>
                    <select className='outline-none rounded indent-2 font-semibold h-6 w-4/5 lg:h-8 ' name="country" defaultValue="select_your_country">
                        <option value="select_your_country" disabled>Select your country</option> 
                        {countries.length > 0 && countries.map(country=> <option value={country} key={country}>{country}</option>)}
                    </select>
                    <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8 ' name='image' type="text" placeholder='URL Image'/>
                    <input type="submit" value="Sign Up" className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-lg cursor-pointer' />
                </form>
                    <Link className='text-sky-300 hover:text-sky-200 ' to="/Login">Already have an account?</Link>           
            </section>
        </main>
    </LayoutMain>
  )
}

export default SignUp