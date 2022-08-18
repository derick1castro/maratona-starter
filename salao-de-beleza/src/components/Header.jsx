import React from 'react'

function Header() {
  return (
    <nav className='bg-[#0b090a]'>
      <div className='py-6 px-[72px] text-white flex justify-between items-center max-w-[1280px] m-auto'>
        <div>Sir<span className='font-bold'>Barber</span></div>
        <button>Agendar Horário</button>
      </div>
    </nav>
  )
}

export default Header