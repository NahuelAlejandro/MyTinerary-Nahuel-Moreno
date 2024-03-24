import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions/userActions";

const Header = ()=>{

    const user = useSelector((store)=> store.users.user)

    const dispatch= useDispatch()

    const location = useLocation();
    
    const links=[
        {path:"/", title:"Home", active:"/" == location.pathname, visible:true},
        {path:"/Cities", title:"Cities", active:"/Cities" == location.pathname, visible:true},
        {path:"/Login", title:"Login", active:"/Login" == location.pathname, visible:user.last_name? false:true},
        {path:"/SignUp", title:"Sign Up", active:"/SignUp" == location.pathname, visible:user.last_name? false:true},
        {path:"/Profile", title:"Profile", active:"/Profile" == location.pathname, visible:user.last_name? true:false}
    ]

    const [menu, setMenu] = useState(false);
        const openMenu = ()=>{
            setMenu(!menu)
            
        }
    
   function handleClick(){
        dispatch(logOut())
   }

    return(
        <header className=" flex justify-between items-center bg-black p-2 text-white">
            <section className="flex gap-4 items-center">
            <img className="w-12 bg-white p-2 rounded-full" src="/airplane.png" alt="Logo" />
            <h1 className="text-2xl font-semibold">MyTinerary</h1>
            </section>
            <nav className="flex gap-5 items-center ">
                <ul className="hidden md:flex md:gap-5 md:items-center ">
                    {links.map((link)=> link.visible 
                    ? (<li key={link.title} ><Link className={`cursor-pointer text-lg px-3 py-1 rounded hover:text-sky-300 ${link.active ? " bg-sky-700/45 border-[1px] border-sky-300 text-sky-300":""}`} to={link.path}>{link.title}</Link></li>) 
                    : null)}
                    {user.last_name? <li className="w-12 h-12 order-last"><img className="w-full h-full bg-white p-[2px] rounded-full" src={`${user.image}`} alt="user-img" /></li> 
                    :<li className="w-10"><img className="w-full bg-white p-2 rounded-full" src="/user-img.png" alt="user-img" /></li>}
                    {user.last_name?<li><button className="text-md px-2 py-[2px] rounded bg-red-600/80 hover:bg-red-600 border-[1px]" onClick={handleClick}>Log out</button></li>:""}
                </ul>
                <ul className={`${menu?"":"hidden"} z-[1] flex flex-col gap-7 justify-center bg-black/70 items-center fixed w-full h-full top-0 left-0 md:hidden`}>
                    {links.map((link)=> link.visible 
                    ? (<li key={link.title} ><Link className={`text-2xl font-semibold  ${link.active ? " text-sky-500":""}`} to={link.path}>{link.title}</Link></li>) 
                    : null)}
                    {user.last_name? <li className="w-32 h-32 order-first	"><img className="w-full h-full bg-white p-[2px] rounded-full" src={`${user.image}`} alt="user-img" /></li> 
                    :<li className="w-32 order-first"><img className="w-full bg-white p-2 rounded-full" src="/user-img.png" alt="user-img" /></li>}
                    {user.last_name ? <li><button className="text-md px-2 py-[2px] rounded bg-red-600/80 hover:bg-red-600 border-[1px]" onClick={handleClick}>Log out</button></li>:""}
                </ul>
            </nav>
            <svg className={`${menu?"hidden":""} h-8 w-8 text-white md:hidden z-[1]  `} fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true" onClick={openMenu} >
                <path  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
                    
            <svg className={`${menu?"":"hidden"}  h-8 w-8 text-white fixed right-[8px]  z-[2]`} fill="none" viewBox="0 0 24 24"  stroke="currentColor" aria-hidden="true" onClick={openMenu}>
                <path  d="M6 18L18 6M6 6l12 12" />
            </svg>
        </header>
    )
}
export default Header;