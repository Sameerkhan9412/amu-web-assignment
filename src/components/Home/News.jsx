import React from 'react'
import Notification from '../common/Notification'
import { Link } from 'react-router-dom'

const News = () => {
  return (
    <div className='col-span-2 bg-[#F4F5F7]'>
        <h1 className='py-2 text-center bg-[#F4F5F7] font-bold text-lg'>NEWS & NOTIFICATIONS</h1>
        <div className='grid grid-cols-2 gap-2'>

        <Notification/>
        <Notification/>
        </div>
        <Link to={""} className='text-center text-green-400 block font-bold my-2 py-2'>View All Notices</Link>
    </div>
  )
}

export default News