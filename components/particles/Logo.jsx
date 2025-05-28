import React from 'react'

const Logo = ({
  text = 'bitácora',
  className = 'flex justify-center gap-2 font-permanent-marker leading-10 text-[1.7em] text-emerald-300' }
) => {
  return (
    <p className={className}>
      {text}
    </p>
  )
}

export default Logo