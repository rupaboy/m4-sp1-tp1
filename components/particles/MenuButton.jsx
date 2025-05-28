import React from 'react'

const MenuButton = (props) => {
  return (
    <p className='flex justify-center gap-2'>
          <i className="bi bi-list text-[1.4em]"></i>
          {props.text}
        </p>
  )
}

export default MenuButton