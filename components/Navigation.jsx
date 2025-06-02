import React, { useState, useRef, useEffect } from 'react'
import Featured from './particles/Featured'
import Argentina from './particles/Argentina'
import { tourismDestinations } from './model/adventures'

const Navigation = ({ onLoadComplete }) => {

    const [isSelected, setIsSelected] = useState(false) //Estado si hay provincia seleccionadas
    const [toFeatured, setToFeatured] = useState({})

    const getFeatured = (province) => {
        // Obtener las claves del objeto tourismDestinations
        const keys = Object.keys(tourismDestinations);
        const featuredPlaces = tourismDestinations[province]

        // Verificar si el id de la provincia existe en las claves
        if (keys.includes(province)) {
            setIsSelected(true)
            setToFeatured(featuredPlaces)

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



    return (
        <div className='grid pt-20 grid-cols-1 md:grid-cols-5 gap-2'>

            {isSelected && <Featured toFeatured={toFeatured} />}


            <Argentina getFeatured={getFeatured} />


        </div>
    )
}

export default Navigation