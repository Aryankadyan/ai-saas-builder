import {useEffect, useState} from 'react'

import {copy, linkIcon, loader, tick} from '../assets'


const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const handleSubmit = async (e) =>{
    e.prevent.Default();
    alert("Submitted")
  }
  return (
  <section className='mt-18 w-full max-w-xl'>
    {/*Search*/}
    <div className='flex flex-col w-full gap-3'>
      <form className = 'relative flex justify-center items-center'
      onSubmit={handleSubmit}
      >
        <img 
        src={linkIcon} alt='link-icon'
        className='absolute left-0 my-2 ml-3 w-6'
        />
         <input
         type='url'
         placeholder='Enter a URL'
         value={article.url}
         onChange={(e)=> setArticle({...article, url: e.target.value})}
         required
         className='url_input peer'
          />
          <button
          type='submit'
          className='submit_btn
          peer-focus:border-gray-600
          peer-focus:text-teal-600'>
            🗑️
          </button>
      </form>
    </div>
  </section>
  )
}

export default Demo
