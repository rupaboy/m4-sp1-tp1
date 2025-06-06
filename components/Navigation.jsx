import { useState, useRef, useEffect } from 'react'
import Featured from './particles/Featured'
import Argentina from './particles/Argentina'
import { tourismDestinations } from './model/adventures'

const Navigation = ({ onLoadComplete, setSelectedId, selectedId }) => {

    const [isSelected, setIsSelected] = useState(false) //Estado si hay provincia seleccionadas
    const [toFeatured, setToFeatured] = useState({}) //


    //getFeatured se dispara desde el mapa de Argentina, partir del Id.
    const getFeatured = (province) => {
        // Obtener las claves del objeto tourismDestinations
        const keys = Object.keys(tourismDestinations);
        const featuredPlaces = tourismDestinations[province].slice(-3) //Limita a 3 últimos elementos del array

        //console.log(featuredPlaces)


        
        if (keys.includes(province)) {
            // Verificar si el id de la provincia existe en las claves del objeto!
            setIsSelected(true)
            setToFeatured(featuredPlaces) //Dispara el cambio de el estado con el objeto.

        } else {
            console.log('Provincia no encontrada');
        }
    };

    //Ciclo de vida del componente
    const calledRef = useRef(false) //Solución con useRef para repeticiónes por StrictMode

    useEffect(() => {
        if (!calledRef.current) {
            onLoadComplete();
            calledRef.current = true;
        }
    }, [onLoadComplete])



    return ( //100%
        <div className='overflow-hidden w-screen pt-13 md:flex md:items-center h-screen justify-around'>

            <div 
            className='flex pt-[6%] justify-center'
            >
                {isSelected && <Featured toFeatured={toFeatured} />}
                {/* Si hay una provincia seleccionada... */}
            </div>

        <Argentina getFeatured={getFeatured} isSelected={isSelected} />
        {/* Mapa interactivo*/}

        </div>
    )
}

export default Navigation