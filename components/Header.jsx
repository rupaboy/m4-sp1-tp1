import { useState } from 'react'
import MenuButton from './particles/MenuButton.jsx'
import LogInButton from './particles/LogInButton.jsx'
import Logo from './particles/Logo.jsx'

function Header() {

  return (
    <>
      <div className='pt-1 absolute h-12 z-40 w-screen bg-linear-185 from-emerald-950 to-green-600 text-emerald-200'>
        <main className='text-sm/10 grid grid-cols-3 leading-11'>
          
          <MenuButton text='Menú' />
          <Logo text='Bitácora' />
          <LogInButton text='Log In' />

        </main>
      </div>
    </>
  )
}

export default Header
