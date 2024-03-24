import { useSelector } from 'react-redux';
import EditProfile from '../components/EditProfile';
import LayoutMain from './LayoutMain'

import { Navigate } from 'react-router-dom';
import { useState } from 'react';


const Profile = () => {

    const [edit,setEdit] = useState(false)
    const user = useSelector((store)=> store.users.user)

    function handleClick() {
        setEdit(!edit)
    }

  return localStorage.getItem("token") ? 
    (
        <LayoutMain>
            <main className='grow min-h-screen flex justify-center items-center py-10 bg-cover bg-no-repeat bg-center bg-[url("/update.jpg")]'>
                 {!edit ?  
                 <div className='w-11/12 bg-black flex flex-col gap-4 border-2 items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-sky-600 shadow-lg shadow-sky-700 py-3 rounded md:w-2/4 lg:w-2/5 xl:w-1/4'>
                    <article className='flex justify-around items-center w-full '>
                        <h2 className='font-semibold uppercase text-center text-2xl md:text-4xl text-sky-100'>{user.first_name}</h2>
                        <img className='w-40 h-40 lg:w-48 lg:h-48 bg-white p-[2px] rounded-full order-first' src={`${user.image}`} alt="user-image" />
                    </article>
                    <table className='flex flex-col gap-3 text-sky-100 text-lg'>
                        <tbody>
                        <tr>
                            <td className='font-semibold'>First name: </td>
                            <td className='indent-1'>{user.first_name}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold'>Last name: </td>
                            <td className='indent-1'>{user.last_name}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold'>Email: </td>
                            <td className='indent-1'>{user.email}</td>
                        </tr>
                        <tr>
                            <td className='font-semibold'>Country: </td>
                            <td className='indent-1'>{user.country}</td>
                        </tr>
                        </tbody>
                    </table>
                    <button className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-lg cursor-pointer' onClick={handleClick}>Edit Profile</button>
                </div>
            :<EditProfile edit={handleClick}/> }
            </main>
            
        </LayoutMain>
    ) 
:<Navigate to ={"/"}/>
   
}

export default Profile