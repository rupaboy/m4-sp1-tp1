import React from 'react'

const PolaroidCard = ({
    className,
    onClick,
    buttonText,
    imgLink,
    imgDescription,
    rotation
}) => {

    return (
        <>
            <div
                className={className}
                style={{ transform: `rotate(${rotation / 3}deg)` }}
                onClick={onClick}
            >
                <img src={imgLink} alt={imgDescription} />
            </div>

            <h4
                className='relative w-39 px-4 leading-4 text-center bottom-10 text-md text-gray-500 font-permanent-marker lowercase'
                style={{ transform: `rotate(${rotation}deg)` }}
            >

                {buttonText}
            </h4>
        </>
    )
}

export default PolaroidCard