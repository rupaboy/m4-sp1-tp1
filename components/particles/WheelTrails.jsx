import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WheelTrails = () => {
  const maxTracks = 10; // Máximo de divs en el rastro
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTracks((prevTracks) => {
        
        const lastTrackY =
          prevTracks.length > 0
            ? prevTracks[prevTracks.length - 1].y - prevTracks[prevTracks.length - 1].height
            : prevTracks.height

        const newTrack = {
          id: Date.now(),
          width: 500,
          height: Math.random() * 20 + 40, // Altura entre 10px y 30px
          y: lastTrackY - prevTracks.height, // Posición acumulada hacia arriba (-Y)
        };

        const updatedTracks = [...prevTracks, newTrack];

        // Limitar el número máximo de rastros
        if (updatedTracks.length > maxTracks) {
          updatedTracks.shift(); // Eliminar el más antiguo
        }

        return updatedTracks;
      });
    }, 500); // Genera un nuevo rastro cada 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute h-100 w-screen overflow-hidden">
      <motion.div
        className="absolute w-full h-full flex justify-center items-end"
        transition={{ duration: 25 }}
        initial={{opacity: 0}}
        animate={{ opacity: [0, 1, 1] }}
      >
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            initial={{
              width: track.width,
              height: track.height,
              y: track.height, // Posición inicial acumulada hacia arriba (-Y)
              opacity: 1,
            }}
            animate={{
              width: 0, // Ancho se reduce a 0
              y: track.height - 180,
              height: track.height - 1, // Mantiene la altura original
              opacity: 1, // Se desvanece
            }}
            transition={{
              duration: 7, // Duración de la animación
              ease: "easeInOut",
            }}
            className="absolute bg-white rounded-t-full"
            //className="absolute border-l-2 border-r-2 bg-[#222] border-gray-400 rounded-t-full"
          />
        ))}
      </motion.div>
    </div>
  );

};

export default WheelTrails;
