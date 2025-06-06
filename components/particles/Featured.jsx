import PolaroidCard from './PolaroidCard';

function Featured(toFeatured) {

  const handleButtonClick = () => {
    console.log('Función ejecutada');

  };


  return ( //Display de fotografías
    <div className='grid items-center justify-center px-3'>
        <h3 //Provincia
        className='relative text-2xl h-10 grid mb-[-20px] sm:mb-2 z-10 md:mt-[-60px] justify-center uppercase text-nowrap text-green-500 font-permanent-marker'
        >
          {toFeatured.toFeatured[0].province}
        </h3>
    
      <div className='flex md:flex-col mb-[-40px] justify-center flex-wrap transform scale-75 sm:scale-100'>
        {toFeatured.toFeatured.map((item, index) => {
          const rotation = Math.random() * -5 - 1; // Generar rotación para cada card
          return (
      
              <PolaroidCard
                key={index} // Usar un key único para cada elemento
                onClick={() => console.log(`Clicked on: ${item.title}`)} // Handler con el título correspondiente
                buttonText={item.title} // Pasar título dinámicamente
                imgLink={item.imgLink} // Pasar imgLink dinámicamente
                imgDescription={item.imgDescription} // Pasar descripción dinámica
                rotation={rotation} // Pasar rotación dinámica
              />
          );
        })}
      </div>
    </div>
  );
}

export default Featured
