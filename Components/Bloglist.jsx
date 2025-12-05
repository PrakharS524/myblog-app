import { blog_data } from '@/Assets/assets'
import React, { useState } from 'react'
import Blogitem from './Blogitem'

const Bloglist = () => {

    const[menu, setyMenu] = useState('All');

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button onClick={()=>setyMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
            <button onClick={()=>setyMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
            <button onClick={()=>setyMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>StartUp</button>
            <button onClick={()=>setyMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blog_data.filter((item)=> menu==="All"?true:item.category===menu).map((item, index)=>{
                return <Blogitem key={index} id={item.id} image={item.image} title={item.title} category={item.category} description={item.description}/>
            })}
        </div>
    </div>
  )
}

export default Bloglist