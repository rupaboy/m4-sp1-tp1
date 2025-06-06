import React from 'react'

const PolaroidCard = ({
    onClick,
    buttonText,
    imgLink,
    imgDescription,
    rotation
}) => {

    return (
            <div className='z-100 cursor-pointer'>
                <div
                    className='w-40 h-38 border-10 border-b-40 border-white bg-gray-600 shadow-md'
                    style={{ transform: `rotate(${rotation / 3}deg)` }}
                    onClick={onClick}
                >
                    <div className='w-35 h-25'>
                        <img src={imgLink} alt={imgDescription} className='h-full w-full object-cover background-cover' />
                    </div>
                </div>
                <h4
                    className='relative w-42 h-10 px-4 leading-4 text-center bottom-10 text-sm text-zinc-900 font-permanent-marker lowercase'
                    style={{ transform: `rotate(${rotation}deg)` }}
                >
                    {buttonText}
                </h4>
            </div>
    )
}

export default PolaroidCard