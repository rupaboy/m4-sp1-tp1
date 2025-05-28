import React from 'react'

const LogInButton = (props) => {
  return (
        <p className='flex justify-center gap-2'>
          <i className="bi bi-box-arrow-in-right text-[1.4em]"></i>
          {props.text}
        </p>
  )
}

export default LogInButton