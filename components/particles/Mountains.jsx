import { motion } from 'framer-motion';
import React from 'react'


const Mountains = () => {
  return (
    <div className='absolute w-screen h-100 overflow-hidden'>
      <motion.div
          className='h-100 w-4000'
          initial={{opacity: 0}}
          animate={{opacity: [0, 0, 1]}}
          transition={{ duration: 12, ease: "easeOut" }}
          >
          <motion.svg
            initial={{x: 0}}
            animate={{ x: [
        -30,  // Punto inicial
        -300, // Pequeña curva
        -600, // Recta
        -900, // Curva pronunciada
        -1200, // Suavizado
        -1500, // Recta corta
        -1800, // Curva más fuerte
        -2100, // Suavizado
        -2400, // Punto extremo
        -2100, // Regreso: Suavizado
        -1800, // Curva más fuerte
        -1500, // Recta corta
        -1200, // Suavizado
        -900, // Curva pronunciada
        -600, // Recta
        -300, // Pequeña curva
        -30, // Retorno al punto inicial
          ]}}
            transition={{ duration: 200, repeat: Infinity, ease: "easeInOut" }}
            viewBox="0 0 2880 240" // Dimensiones ideales para h-60 y desplazamiento en X
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-1000 h-60"
            preserveAspectRatio="none"
          >
            <path
              d="
                M0,180
                C120,140 240,200 360,160
                C480,120 600,180 720,100
                C840,60 960,160 1080,140
                C1200,120 1320,200 1440,180
                C1560,160 1680,80 1800,140
                C1920,200 2040,60 2160,120
                C2280,180 2400,100 2520,140
                C2640,180 2760,120 2880,160
                L2880,240
                L0,240
                Z"
              fill="#EEE" // Color de rocas
              stroke='#222'
              strokeWidth={3}
            />
          </motion.svg>
      </motion.div>
    </div>
  );
}

export default Mountains