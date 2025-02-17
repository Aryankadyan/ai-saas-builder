import React from 'react'
import {logo} from '../assets'


const Champ = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-11 pt-4'>
            <img src={logo} alt='sumz_logo'
            className='w-30 object-contain'/>

            <button 
            type ='button'
            onClick={()=> window.open('https://github.com/Aryankadyan/ai-saas-builder.git/')}
            className='black_btn'>
              Github
            </button>
        </nav>
        <h1 className='head_text'>Summarize Articles with
          <br className='max-md:hidden'/>
          <span className="orange_gradient">Artifical Intelligence</span>
        </h1>
        <h2 className='desc'>
        "Summarize Articles Instantly with Cutting-Edge AI for Clear, Concise Insights" 🚀
        </h2>
    </header>

    
  )
}

export default Champ
