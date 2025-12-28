
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
            I’m Sujon Biswas, a Full-Stack Web Developer building
            modern, scalable, and high-performance web applications. I
            specialize in React.js, Next.js, TypeScript, and Tailwind CSS /
            Bootstrap to create clean, responsive user interfaces.
            I develop secure backends using Node.js, Express.js,
            PostgreSQL,Mongodb, and Firebase, with strong Redux and
            DSA-based problem-solving skills. Trained through Next
            Level Web Development, Udemy, and Hablu Programmer, I
            deliver clean code, best practices, and reliable results
            clients can trust.
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
