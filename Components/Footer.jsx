import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 itemscenter'>
        <Image src={assets.logo_light} alt='' width={120}/>
        <p className='text-sm text-white'>All right reserved. Copyright @blogger</p>
        <div>
            <Image src={assets.facebook_icon} alt='' width={40} className='inline-block mx-2'/>
            <Image src={assets.twitter_icon} alt='' width={40} className='inline-block mx-2'/>
            <Image src={assets.googleplus_icon} alt='' width={40} className='inline-block mx-2'/>
        </div>

    </div>
  )
}

export default Footer