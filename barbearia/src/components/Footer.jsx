import React from 'react'
import Face from '../assets/img/facebook.svg'
import Insta from '../assets/img/instagram.svg'
import Twit from '../assets/img/twitter.svg'
import Logo from '../assets/img/sirbarber-logo.svg'


function Footer() {
  return (
    <footer className='bg-[#0b090A] text-white flex justify-between py-[48px] px-[72px] items-center'>
        <div className='flex flex-col gap-4'>
            <img className='w-[175px]' src={Logo} alt="" />
            <span>&copy; 2022 - SirBarber. Todos os direitos reservados.</span>
        </div>
        <div className='flex space-x-6'>
            <a href="http://facebook.com">
                <img src={Face} alt="" />
            </a>

            <a  href="http://instagram.com">
                <img src={Insta} alt="" />
            </a>
            
            <a href="http://twitter.com">
                <img src={Twit} alt="" />
            </a>
        </div>
    </footer>
  )
}

export default Footer