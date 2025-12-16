"use client";
import { motion } from "motion/react";
import React from "react";
import { ImagesSlider } from "./images-slider";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Size_template } from "../styles";


export function ImagesSliderDemo() {

  const words = ["web developer", "front-end developer", "backend developer", "full stack developer"];
  const images = [
    "https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/09/09/21/12/monitor-933392_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/15/32/code-1839877_1280.jpg"
  ];
  return (
    <ImagesSlider className="h-[40rem] -mt-4" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50"
      >
        <motion.div className="relative ">
          <Size_template className="-mt-9">
            <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-left md:max-w-[60%] w-full relative px-6 md:px-0 space-y-2">
              <h1 className="font-primary font-bold text-[24px] md:text-[35px] lg:text-[40px] leading-tight"> <span className="text-[18px] md:text-[25px]"> Hello,</span> <br /> <span className="text-[24px] md:text-[35px] text-[#9EFF00]" >I’m Sujon a</span> <br /> <ContainerTextFlip
              className="mt-2"  words={words}
              />

              </h1>

              <div className="flex gap-6 mt-6">
            <a href="https://www.instagram.com/sujonbiswasdev" className="text-3xl text-white border-none outline-none cursor-pointer "><FaInstagramSquare/></a>
            <a href="https://www.linkedin.com/in/sujon-biswas-934a8b37a/" className="text-3xl text-white border-none outline-none cursor-pointer">
            <FaLinkedin/></a>
            <a href="https://www.facebook.com/sujonbiswas2025/" className="text-3xl text-white border-none outline-none cursor-pointer"><FaFacebook/></a>
            <a className="text-3xl text-white border-none outline-none cursor-pointer" href="https://www.youtube.com/@nextgenprogrammer01"> <FaYoutube/> </a>
          </div>



              <div className="pt-4 pb-4 flex sm:flex-row flex-col items-center gap-5">
                <a className="bg-[#FD6F00] text-white font-bold font-primary text-[18px] lg:text-[20px] py-1 px-6 rounded-xl" href="https://shorturl.at/Vv1bI">Hire Me</a>
                <a className="border border-[#FD6F00] text-white font-bold font-primary text-[18px] lg:text-[20px] py-1 px-6 rounded-xl" href="https://shorturl.at/Vv1bI">Order Now</a>


              </div>


            </div>

            <div className="text-right md:max-w-[40%] w-full mr-0">
              <div className="z-10 relative">

                <img src="https://res.cloudinary.com/drmeagmkl/image/upload/v1764588921/11_mzks0k.png" className="z-0 px-6 md:px-0" alt="" />
                <div className="absolute left-0 bottom-0 h-1/5 right-0 z-10  bg-gradient-to-t from-black to-transparent hidden md:block ml-3 "></div>
              </div>
            </div>
          </div>
          </Size_template>

        </motion.div>
      </motion.div>
    </ImagesSlider>
  );
}
