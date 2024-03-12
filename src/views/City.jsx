import React from 'react'
import LayoutMain from './LayoutMain'
import { Link } from 'react-router-dom'

const City = () => {
  return (
    <>
        <LayoutMain>
            <main className='grow flex flex-col gap-10 justify-center items-center'>
            <h3 className='font-semibold text-5xl'>Under construction</h3>
            <Link className='px-3 py-1 font-semibold bg-sky-500 border-[1px] shadow-md shadow-sky-800 hover:bg-sky-400 border-black rounded-xl' to="/Cities">Go to cities</Link>                        
            </main>
        </LayoutMain> 
    </>
  )
}

export default City