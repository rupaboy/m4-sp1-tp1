import React from 'react'
import { motion } from 'framer-motion'

const LoadingText = () => {
  return (
    <motion.h1 className='absolute top-110 font-permanent-marker text-[#222] text-[5em] tracking-widest w-screen text-center'
        transition={{ duration: 4, repeat: Infinity, ease: 'easeOut' }}
        initial={{opacity: 0}}
        animate={{ y: [-5, -250], scale: 0, opacity: [0, 0, 0, 1, 1] }}
    >
        iniciando
        </motion.h1>
  )
}
export default LoadingText