import React, { useState } from 'react'
import Button from '../.././components/Button'
import { motion } from 'framer-motion'
import VolumeToggleBtn from '../.././components/VolumeToggleBtn'
import IntroVideo from '../../assets/Untitled design.mp4'
import Avatar1 from '../../assets/Avatar1.avif'
import Avatar2 from '../../assets/Avatar2.webp'
import Avatar3 from '../../assets/Avatar3.avif'
import Frame from '../../assets/Frame.webp'
import InfiniteSlider from './InfiniteSlider'
import heygenPhoto1 from '../../assets/heygenPhoto1.webp'

const Home = () => {
  const [isMute, setIsMute] = useState(true);

  const toggleMute = () => {
    setIsMute(!isMute);
  }

  return (
    <div className='max-w-full overflow-hidden'>
      <div className='relative top-[72.8px] z-10 w-full'>
        <div className='px-4'>
          <div className='flex flex-col pt-12 justify-center items-center text-center'>
            <img className='absolute top-11 h-full w-full z-0' src='https://cdn.prod.website-files.com/66a9edf7bd0139f5207e19be/66db31dbefabba2ccab38c8b_hero-2%202.avif' alt="bg-Image" />
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
              className='text-[1.4rem] w-full sm:text-[1.75rem] md:text-[2rem] leading-custom-1.3 lg:text-[3rem] xl:text-[3.5rem]'
            >
              Create and translate videos with AI
            </motion.h1>
            <div className='w-full flex flex-col items-center justify-center mt-6 gap-6 z-50'>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .7 }}
                viewport={{ once: true }}
                className='text-center text-[.85rem] md:text-[1rem] lg:text-[1.10rem]'
              >
                Produce studio-quality videos in 175 languages without a camera or crew.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .9 }}
                viewport={{ once: true }}
                className='w-full'
              >
                <Button className='text-[1rem] py-3 px-6 h-[55px]'>Get started for free</Button>
                <p className='text-center text-[.7rem] mt-3 md:text-[.8rem]'>Unlimited video | No credit card needed</p>
              </motion.div>
            </div>
            <div className='w-full relative mt-8'>
              <video className='w-auto z-40 h-full rounded-xl sm:rounded-3xl object-cover lg:rounded-[1.75rem] aspect-video' src={IntroVideo} loop autoPlay muted={isMute}>
              </video>
              <VolumeToggleBtn isMute={isMute} onClick={toggleMute} className='absolute top-3 left-3 sm:top-8 sm:left-8 z-50 sm:h-16 sm:w-16 sm:p-[.4rem]' />
              <div className='min-w-36 max-w-52 min-h-[7.5rem] w-[208px] mb-2 mr-2 ml-3 backdrop-blur-xl rounded-2xl p-[.4rem] relative bottom-16 md:bottom-0 md:absolute md:min-w-[21rem] lg:bottom-5 lg:left-5 xl:min-w-[23rem] xl:p-[.5rem] box-border'>
                <div className='bg-white rounded-xl h-full w-full p-[.8rem] md:p-5 flex flex-col gap-2 md:gap-3 xl:gap-4'>
                  <div className='flex gap-3'>
                    <div className='max-w-6 max-h-6 rounded-full flex items-center justify-center overflow-hidden p-2 bg-green-500 md:max-w-8 md:max-h-8 xl:max-w-9 xl:max-h-9'>
                      <img className='max-w-[1.2rem] md:max-w-7 md:max-h-7 xl:max-w-8 xl:max-h-8 rounded-full' src={Avatar1} alt="avatar1" />
                    </div>
                    <img className='max-w-6 max-h-6 md:max-w-8 md:max-h-8 xl:max-w-9 xl:max-h-9' src={Avatar2} alt="avatar2" />
                    <img className='max-w-6 max-h-6 md:max-w-8 md:max-h-8 xl:max-w-9 xl:max-h-9' src={Avatar3} alt="avatar3" />
                  </div>
                  <div className='bg-[#e6ecf1] h-[.1rem]'></div>
                  <div>
                    <p className='text-left text-[.6rem] mb-4 md:mb-0 md:text-[.9rem] lg:mb-6 xl:text-[1rem] xl:mb-7'>
                      Hey there! Welcome to HeyGen, where you can create and translate videos without a camera or crew
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full pb-10 relative bottom-10 flex flex-col items-center justify-center gap-4 md:top-10 lg:gap-5'>
            <div className='text-[.9rem] text-center leading-7 flex flex-col md:flex-row md:gap-2 md:text-[1rem] lg:text-[1.10rem]'>
              <p className='flex items-center gap-2'>
                Trusted by over 45,000 customers |
                <img className='w-4 h-4' src={Frame} alt="xyz" />
              </p>
              <p>Rated 4.8/5 on G2</p>
            </div>
            <InfiniteSlider />
          </div>
        </div>
      </div>
      <div className='px-[.8rem] sm:px-[.9rem] md:px-[1.20rem] relative top-24 w-full'>
        <div className='py-12 lg:py-28 flex gap-7 justify-center flex-col lg:flex-row items-center w-full lg:mr-auto lg:gap-20'>
          <img className='w-full xl:w-[934px]' src={heygenPhoto1} alt="photo1" />
          <div className='flex flex-col gap-5 w-full lg:max-w-[36.875rem] xl:mr-auto xl:w-[637px]'>
            <motion.h2
              className='text-[1.39rem] sm:text-[1.5rem] md:text-[2.4rem] lg:text-[3.25rem] lg:leading-[3.5rem]'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
            >
              Meet your new spokesperson.
            </motion.h2>
            <motion.p
              className='text-[.9rem] md:text-[1rem] xl:text-[1.05rem]'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
              viewport={{ once: true }}
            >
              It's you. Well, an AI version of you that speaks 175 languages, moves naturally, and always follows the script. Create your own avatar with just a webcam, or use one of our avatars. <span className='hidden sm:inline'>Change voice, clothes, or background with a click.</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .9 }}
              viewport={{ once: true }}
              className='w-full'
            >
              <Button className='py-[.8rem] px-5'>Sign up for free</Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
