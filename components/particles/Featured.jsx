import PolaroidCard from './PolaroidCard';

function Featured(toFeatured) {

  const handleButtonClick = () => {
    console.log('Función ejecutada');

  };


  return (
    <div className='flex md:flex-col'>
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
  );
}

export default Featured
