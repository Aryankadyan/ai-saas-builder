import React from 'react'
import {logo} from '../assets'


const Champ = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center flex-col'>
            <img src={logo} alt='sumz_logo'
            className='w-30 object-contain'/>
        </nav>
    </header>

    
  )
}

export default Champ
