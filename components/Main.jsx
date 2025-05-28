import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LazyLoader from '../components/LazyLoader'
import Header from './Header'
import Featured from './Featured'


const Main = () => {

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    // Simula una condición (como la finalización de una carga)
    const timer = setTimeout(() => {
      setShowHeader(true); // TIEMPO DE LAZY LOADER
    }, 25000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, []);


  return (
     <>
      {!showHeader && <LazyLoader />}
      {showHeader && (
        <motion.div
        initial= {{opacity: 0}}
        animate= {{opacity: 1}}
        transition= {{duration: 1}}
        >
          <Header />
          <Featured />
        </motion.div>
      )}
    </>
  )
}

export default Main