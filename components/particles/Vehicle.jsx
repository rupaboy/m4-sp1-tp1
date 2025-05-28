import { motion } from 'framer-motion';
import React from 'react';

const Vehicle = () => {
  return (
    <motion.div
      className="z-10 flex justify-center items-center w-screen h-100"
      initial={{opacity: 0}}
      animate={{opacity: [0, 0, 1]}}
      transition={{ duration: 6 }}
    >
      <motion.div //SOMBRA
        className='absolute h-9 w-20 mt-44 rounded-xl bg-[#222]'
        animate={{ rotate: [-1.1, 1, -1.1], y: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}/>
      <motion.img //PICKUP
        src="../public/assets/pickup.svg" // Ruta de tu imagen PNG
        alt="Vehicle"
        className="h-30 mt-34"
        animate={{ rotate: [-1.1, 1, -1.1], scaleY: [ 1.03, 1, 1.03 ], y: [-1, 0, -1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default Vehicle;
