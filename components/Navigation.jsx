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
        const featuredPlaces = tourismDestinations[province].slice(-3) //Limita a 3 últimos elementos del array

        //console.log(featuredPlaces)


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
        <div className='overflow-hidden w-screen pt-13 md:flex md:items-center h-screen justify-around'>

            <div
            className='flex pt-[6%] justify-center'
            >
                {isSelected && <Featured toFeatured={toFeatured} />}
            </div>

        <Argentina getFeatured={getFeatured} />

        </div>
    )
}

export default Navigation