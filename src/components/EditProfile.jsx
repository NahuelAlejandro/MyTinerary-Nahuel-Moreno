import { useEffect, useState } from 'react'
import getCountries from '../sevice/countriesQueries'
import { useDispatch, useSelector } from 'react-redux'
import alerts from '../utils/alerts';
import authQueries from'../sevice/authQueries'
import { update } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {

    const user = useSelector((store)=> store.users.user)

    const [countries, setSountries] = useState([])

    const dispatch = useDispatch()

    const navigate = useNavigate()
    
        useEffect(()=>{
            getCountries().then(setSountries)
        },[])
    
    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password,
        country: user.country,
        image: user.image
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
        authQueries.update(aux).then((response) => {
            if (response.status == 201){
                alerts.success("Updated profile")
                dispatch(update(response.data))
            }else{
                alerts.error(response.statusMsg)
            }
        })
        navigate("/")
    }


  return (
     <section className='w-11/12 bg-black flex flex-col gap-2 border-2 items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-sky-600 shadow-lg shadow-sky-700 py-3 rounded md:w-2/4 lg:w-2/5 xl:w-1/4'>
                    <img className='w-40 h-40 lg:w-48 lg:h-48 bg-white p-[2px] rounded-full' src={`${user.image}`} alt="user-image" />
                    <h3 className='font-semibold text-2xl md:text-4xl '>{user.first_name}</h3>
                    <form className='flex flex-col items-center gap-5' onSubmit={handleSubmit} onInput={handleInput}>
                        <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8' name='first_name' type="text" placeholder='First Name'defaultValue={user.first_name}/>
                        <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8' name='last_name' type="text" placeholder='Last Name'defaultValue={user.last_name}/>
                        <input className='outline-none rounded indent-2 w-4/5 lg:h-8' name='email' type="email" placeholder='Email'defaultValue={user.email}/>
                        <select className='outline-none rounded indent-2 font-semibold h-6 w-4/5 lg:h-8 ' name="country" defaultValue={`${user.country}`}>
                            <option name="selected country" value={`${user.country}`}  disabled>{user.country}</option>
                            {countries.length > 0 && countries.map(country=> <option value={`${country}`} key={country}>{country}</option>)}
                        </select>
                        <input className='outline-none rounded indent-2 font-semibold w-4/5 lg:h-8 ' name='image' type="text" placeholder='URL Image'defaultValue={user.image}/>
                        <input type="submit" value="Save Changes" className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-lg cursor-pointer' />
                    </form>
                </section>    
  )
}

export default EditProfile