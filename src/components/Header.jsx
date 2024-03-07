

import { useState } from "react";

const Header = ()=>{


const [menu, setMenu] = useState(false);
    const openMenu = ()=>{
        setMenu(!menu)
        
    }

    return(
        <header className=" flex justify-between items-center bg-black p-2 text-white">
            <section className="flex gap-4 items-center">
            <img className="w-12 bg-white p-2 rounded-full" src="/airplane.png" alt="Logo" />
            <h1 className="text-2xl font-semibold">MyTinerary</h1>
            </section>
            <nav className="flex gap-5 items-center ">
                <ul className="hidden md:flex md:gap-5 md:items-center ">
                    <li className="cursor-pointer text-lg hover:text-sky-400"><a href=""></a>Home</li>
                    <li className="cursor-pointer text-lg hover:text-sky-400"><a href=""></a>Cities</li>
                    <li className="w-10"><img className="w-full bg-white p-2 rounded-full" src="/user-img.png" alt="user-img" /></li>
                </ul>
                <ul className={`${menu?"":"hidden"} z-[1] flex flex-col gap-7 justify-center bg-black/65 items-center fixed w-full h-full top-0 left-0 md:hidden`}>
                    <li className=" text-2xl"><a href="#"></a>Home</li>
                    <li className=" text-2xl"><a href="../views/cities"></a>Cities</li>
                    <li className="w-32 order-first	"><img className="w-full bg-white p-2 rounded-full" src="/user-img.png" alt="user-img" /></li>
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