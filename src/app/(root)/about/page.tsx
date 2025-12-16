
import { Size_template } from '@/components/styles'

const Abouts = () => {
  return (
    <Size_template className='mt-30'>
        <div className='flex flex-col md:flex-row items-center justify-between max-w-[100%] space-x-3'>
            <div className='w-full md:max-w-[60%] pr-2'>
              <div className='mt-7'>
                  <h2 className='font-primary text-center font-black text-[20px] md:text-[27px] lg:text-[32px] xl:text-[35px] bg-gradient-to-r from-[#0438d5] to-primary bg-clip-text text-transparent hover:text-primary duration-150 transition-all'>About us</h2>
              </div>

              <p className='text-[#a6a09b] mb-4 mt-2.5 leading-6 text-[17px]'> 
                I’m Sujon Biswas, a passionate Frontend Developer with 2 years of practical experience in building fast, modern, and user-focused web applications. I specialize in JavaScript, TypeScript, React.js, Next.js, Firebase, and strong problem-solving with DSA to deliver clean, efficient, and scalable solutions.
                <p className='mt-6 '>my education at Sylhet Polytechnic Institute, Department of Computer Science & Technology, which strengthened my technical foundation and analytical thinking.</p>
              </p>

            </div>
            <div className=' w-full md:max-w-[40%] pl-2'>
                <img src="https://res.cloudinary.com/drmeagmkl/image/upload/v1765536346/sujonbiswas_exfo5o.jpg" className='rounded-md' alt="" />
            </div>
        </div>
    </Size_template>
  )
}

export default Abouts
