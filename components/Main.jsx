import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LazyLoader from '../components/LazyLoader'
import Header from './Header'
import Navigation from './Navigation'

const Main = () => {

  const totalComponents = 2; // Límite de módulos antes del final de Lazy Loader.

  const [loadedComponents, setIsComponentLoaded] = useState(0); // Agregar carga parcial
  const [isContentLoaded, setIsContentLoaded] = useState(false); // Estado de carga total
  const [loader, setLoader] = useState(true) //Loader activo por default

  const onLoadComplete = () => {
    setIsComponentLoaded((prev) => prev + 1);
  }; //Se invoca desde la raiz de un componente (Vía prop)

  useEffect(() => {

    //Cada vez que se carga un componente.
    console.log(`Componentes Cargados: ${loadedComponents}, totalComponents: ${totalComponents}`)
    if (loadedComponents >= totalComponents) {
      setIsContentLoaded(true);
    } // El límite es totalComponents. Establece IsContentLoaded
  }, [loadedComponents, totalComponents]);


  return (
    <>
      {/* LazyLoader con animación */}
      {loader && ( //Si continúa el primer ciclo loader
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isContentLoaded ? 0 : 1 }} //¿Está todo cargado?
          transition={{ duration: 1 }}
          onAnimationComplete={() => {
            if (isContentLoaded) setLoader(false); //Desmontar el lazyLoader
          }}
        > <LazyLoader />
        </motion.div>

      )}
      {/* Al finalizar la carga.
        Cambió isContentLoaded.
        El contenido está disponible y setLoader es false. */}

      <motion.div //Body se hará visible paulatinamente.
        initial={{ opacity: 0 }}
        animate={{ opacity: isContentLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {/* A partir de > puedes agrupar el Header y los componentes secundarios. */}
        <Header onLoadComplete={onLoadComplete} />

        <Navigation onLoadComplete={onLoadComplete} />


        {/* Finaliza contenido del Landing Page */}
      </motion.div>
    </>
  );
};

export default Main