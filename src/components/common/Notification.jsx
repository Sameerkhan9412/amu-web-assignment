import React from 'react'
const Notification = () => {
  return (
    <div className='text-center'>
        <h1 className='font-bold pl-2 bg-[#E0E0E0] p-2 rounded-sm m-2'>{"University News"}</h1>
        <div className=' overflow-y-scroll h-96 p-2 m-2 bg-white'>
            {
                [1,2,3].map((ele,index)=>(

            <div className='hover:text-[#9A3535] p-1 m-2 text-left '>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quae repudiandae aliquam officiis nihil! Fugit eos nobis rerum obcaecati. Voluptate abx.</p>
                <p className='border-b-2 border-gray-500 text-[#9A3535]'>published on xxxxxxx</p>
            </div>
                ))
            }
        </div>
        <button className='bg-[#6E1210] text-center py-1 px-2 text-white font-bold rounded-lg'>View All</button>
    </div>
  )
}

export default Notification