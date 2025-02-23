import React from 'react'
const UniversityInfo=[
    {
        count:1875,desc:"Founded as MAO College"
    },
    {
        count:1155,desc:"Acres Campus Area"
    },
    {
        count:20,desc:"Halls of Residence"
    },
    {
        count:37113,desc:"Students"
    },
    {
        count:13,desc:"Faculties"
    },
    {
        count:170000,desc:"Alumni"
    },
    {
        count:1678,desc:"Academic Staff"
    },
    {
        count:117,desc:"Departments"
    },
]
const Grade = () => {
  return (
    <div className='col-span-2 bg-[#F4F5F7] my-4 py-4'>
        <h1 className='text-lg font-bold text-center'>University at a Glance</h1>
        <h2 className='text-lg font-bold text-[#D45552] text-center'>Naac Grade ‘A+’ (3.35/4)</h2>
        <div className='grid grid-cols-2'>
            <div>
               <h1 className='text-[#D45552] font-bold'>WHY AMU</h1>
               <p className='text-sm'>Aligarh Muslim University (AMU) draws students from all corners of the country as well as foreign countries, especially Africa, West Asia and Southeast Asia.</p>
               <p className='font-bold my-4'>THIS IS WHY WE ARE CONSISTENTLY RANKED AMONG TOP 10 UNIVERSITIES</p>
               <a href="" className='py-2 border-2 px-4 mt-6' > Read more about amu</a>
            </div>
            <div className='grid grid-cols-2'>
                {
                    UniversityInfo.map((info,index)=>(
                <div>
                    <p className='text-2xl font-bold'>{info.count}</p>
                    <p className='text-sm'>{info.desc}</p>
                </div>
                        
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Grade