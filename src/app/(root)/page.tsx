import { ImagesSliderDemo } from "@/components/ui/hero"
import Services from "./service/page"
import { Size_template } from "@/components/styles"
import Abouts from "./about/page"
import Skills from "./skills/page"
import Works from "./works/page"



const Home = () => {
  return (
    <div className='text-white mt-20 overflow-hidden'>
      <Size_template className="">
        {/* hero section */}
        <ImagesSliderDemo />
        {/* about us */}
        <Abouts />
        {/* services */}
        <Services />
        {/* skills */}
        <Skills/>
        {/* works */}
        <Works/>
      </Size_template>

    </div>
  )
}

export default Home
