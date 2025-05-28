import { motion } from 'framer-motion'
import WheelTrails from '../components/particles/WheelTrails'
import Vehicle from '../components/particles/Vehicle'
import LoadingText from '../components/particles/LoadingText'
import Mountains from '../components/particles/Mountains'
import Logo from './particles/Logo'
import React from 'react'


const LazyLoader = () => {
  return (
    <>
        <Mountains />
        <WheelTrails />
        <LoadingText />
        <Vehicle />
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5}}>
          <Logo
          className='w-full text-center font-permanent-marker bottom-[1em] text-[3em] text-white border-t'
          />
        </motion.div>
        
            
          
    </>
  )
}

export default LazyLoader