"use client"
import { Size_template } from '@/components/styles'
import { GlareCard } from '@/components/ui/glare-card'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Skills = () => {

  const [skilldata, setskilldata] = useState([]);
  useEffect(() => {
    axios.get("/api/skills.json").then((response) => {
      setskilldata(response.data);
    });
  }, []);

  return (
    <Size_template className='mt-20'>
     <div className='flex flex-col items-center justify-center font-primary mb-10'>
       <h2 className='font-primary text-center font-black text-[20px] md:text-[27px] lg:text-[32px] xl:text-[35px] bg-gradient-to-r from-[#0438d5] to-primary bg-clip-text text-transparent hover:text-primary duration-150 transition-all -mt-5'>My Recent Skills</h2>
     </div>
     <div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-7 space-x-6">
      {skilldata.map((item:any, index) => {
        return (
          <GlareCard className='min-h-[300px] min-w-auto '>
            <div
            key={index}
            className=""
          >
            <h1
              className="hover:bg-blue-900  text-white font-bold px-5 py-3"
              style={{ backgroundColor: item.color}}
            >
              {item.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 space-x-4 space-y-1 mt-2 p-2 mb-2">
              {item.skill.map((item:any, index:number) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row  gap-2 mt-2 bg-gray-800 px-4 py-2 items-center rounded-sm outline-1 outline-[#2f2e2e] shadow-md"
                  >
                    <img src={item.icon} className="w-8 h-8" alt={item.name} />
                    <p className="text-sm font-semibold text-white ">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          </GlareCard>
        );
      })}
    </div>
     </div>
      
    </Size_template>
  )
}

export default Skills
