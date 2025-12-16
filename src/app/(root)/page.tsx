import { ImagesSliderDemo } from "@/components/ui/hero"
import Services from "./service/page"
import { Size_template } from "@/components/styles"
import Abouts from "./about/page"
import Skills from "./skills/page"



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
      </Size_template>

    </div>
  )
}

export default Home
