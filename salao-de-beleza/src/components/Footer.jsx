import React from 'react'
import Face from '../assets/img/facebook.svg'
import Insta from '../assets/img/instagram.svg'
import Twit from '../assets/img/twitter.svg'


function Footer() {
  return (
    <footer>
        <div>
            <div>SirBarber</div>
            <span>&copy; 2022 - SirBarber. Todos os direitos reservados.</span>
        </div>
        <div>
            <a href="http://facebook.com">
                <img src={Face} alt="" />
            </a>

            <a href="http://instagram.com">
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