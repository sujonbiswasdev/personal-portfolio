"use client"
import { Size_template } from '@/components/styles'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Services = () => {
  const [SVData, setSvdata] = useState([])
  useEffect(() => {
    axios.get('/api/Service.json')
      .then((response) => {
        setSvdata(response.data)
      })
  }, [])
  return (
    <Size_template className='mt-20 '>
      <div className='text-white'>
        <h2 className='font-primary text-center font-black text-[20px] md:text-[27px] lg:text-[32px] xl:text-[35px] bg-gradient-to-r from-[#0438d5] to-primary bg-clip-text text-transparent hover:text-primary duration-150 transition-all'>Services</h2>
        <p className='py-4 text-center flex flex-col items-center justify-center lea'>I offer specialized Full Stack development services, where every technical choice is made with a clear goal: to deliver a performant, stable, and future-proof application that directly supports your business objectives.</p>
       <div className='flex flex-col items-center justify-center'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-8 gap-7 space-y-5 mt-6 md:mt-10 '>
          {
            SVData.map((item: any, index) => {
              const titledata = item.Heading.slice(0,70,'.....')
              const slicedata = item.des.slice(0,100,'.......')
              return <div key={index} className=''>
                <CardSpotlight className="min-h-96 max-w-96 border-r border-primary hover:border-blue-900 hover:text-primary ">
                  <img src={item.img} className='hover:scale-75' alt="" />
                  <div className='mt-6 mb-2 z-50'>
                    <h3 className='border-t pt-6 mb-4  md:text-[18px] lg:text-[20px] xl:text-[22px]'>{titledata}....</h3>
                    <p className='text-[#8e8e8e] text-[13px] md:text-[15px] lg:text-[17px] hover:text-primary duration-200 transition-all'>{slicedata}....</p>
                  </div>
                </CardSpotlight>
              </div>
            })
          }
        </div>
       </div>
      </div>
    </Size_template>
  )
}

export default Services
