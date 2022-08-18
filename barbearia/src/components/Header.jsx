import Logo from '../assets/img/sirbarber-logo.svg'

function Header() {
  return (
    <nav className='bg-[#0b090a]'>
      <div className='py-6 px-[72px] text-white flex justify-between items-center max-w-[1280px] m-auto'>
        <img className='w-[114px]' src={Logo} alt="" />
        <button className='hover:border-[#d9d9d9] hover:text-[#d9d9d9]'>Agendar Horário</button>
      </div>
    </nav>
  )
}

export default Header