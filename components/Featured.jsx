import { useState } from 'react';
import PolaroidCard from './particles/PolaroidCard';

function Featured() {

  const rotation = Math.random() * -5 -1

  const handleButtonClick = () => {
    console.log('Función ejecutada');
  };

  return (
    <div className='absolute top-24 left-8 w-screen h-screen'> 
      <PolaroidCard
        className="h-40 w-40 border-10 border-b-40 border-white bg-gray-600 shadow-md"
        onClick={handleButtonClick}
        buttonText='quebrada de la herradura'
        imgLink='{imgLink}'
        imgDescription='{imgDescription}'
        rotation={rotation}
      />
      <PolaroidCard
        className="h-40 w-40 border-10 border-b-40 border-white bg-gray-600 shadow-md"
        onClick={handleButtonClick}
        buttonText='Laguna Escondida'
        imgLink='{imgLink}'
        imgDescription='{imgDescription}'
        rotation={rotation}
      />
      <PolaroidCard
        className="h-40 w-40 border-10 border-b-40 border-white bg-gray-600 shadow-md"
        onClick={handleButtonClick}
        buttonText='supervolcán galán'
        imgLink='{imgLink}'
        imgDescription='{imgDescription}'
        rotation={rotation}
      />
    </div>
  );
}

export default Featured
