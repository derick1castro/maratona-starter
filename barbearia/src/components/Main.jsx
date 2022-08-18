import React from 'react'
import Hero from '../assets/img/hero.png'
import CardOne from '../assets/img/card1.png'
import CardTwo from '../assets/img/card2.png'
import CardTre from '../assets/img/card3.png'
import Location from '../assets/img/location.svg'
import What from '../assets/img/whatsapp.svg'

function Main() {
  return (
    <>
      <section className='bg-[#0b090a] text-white '>
        <div className='flex  justify-between items-center max-w-[1280px] m-auto gap-[32px] px-[72px]'>
          <div className='flex flex-1 flex-col items-start gap-[16px] py-[96px]'>
            <h1 className='text-5xl text-whit font-bold'>Uma nova experiência em barbearia</h1>
            <p className='text-lg font-bold max-w-[520px]'>Experimente mudar totalmente sua maneira de ir ao barbeiro com inovação, bom atendimento e com certeza, muito estilo!</p>
            <button className='py-5 px-10 bg-[#e5383b] hover:bg-[#ba181b] border-0 text-lg flex gap-3 items-center'><img src={What} alt="" /> Agendar Horário</button>
          </div>

          <div className='flex-1 self-end'>
            <img src={Hero} alt="" />
          </div>
        </div>
      </section>
        
      <section className='flex justify-between items-center max-w-[1280px] m-auto'>
        <div className='py-[96px] px-[72px]'>
          <header>
            <span className='text-[#e5383b] font-bold uppercase'>Nossos serviços</span>
            <h2 className='text-4xl font-bold'>Veja o que fazemos de melhor</h2>
          </header>
          {/* Service List */}
          <div className='mt-[48px] flex gap-[32px]'>
            {/* Service Card */}
            <div className='bg-[#f5f3f4] border-2 border-[#d3d3d3]'>
              <img className='max-w-[100%]' src={CardOne} alt="" />
              <div className='p-[32px] flex flex-col gap-2'>
                <h3 className='text-xl font-bold'>Corte de cabelo</h3>
                <p>Cortes profissionais e modernos para valorizar seu estilo.</p>
              </div>
            </div>
            <div className='bg-[#f5f3f4] border-2 border-[#d3d3d3]'>
              <img className='w-[100%]' src={CardTwo} alt="" />
              <div className='p-[32px] flex flex-col gap-2'>
                <h3 className='text-xl font-bold'>Barba aparada</h3>
                <p>Dê uma bela forma pra sua barba com nossos cuidados especiais.</p>
              </div>
            </div>
            <div className='bg-[#f5f3f4] border-2 border-[#d3d3d3]'>
              <img className='max-w-[100%]' src={CardTre} alt="" />
              <div className='p-[32px] flex flex-col gap-2'>
                <h3 className='text-xl font-bold'>Lavagem</h3>
                <p>Cuide da limpeza da sua cabeça com produtos exclusivos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className='bg-[#f5f3f4] '>
        <div className='flex justify-between items-center max-w-[1280px] m-auto pt-[96px] pb-[48px] px-[72px]'>
          <header className=''>
              <span className='text-[#e5383b] font-bold uppercase'>Onde estamos</span>
              <h2 className='text-4xl font-bold'>Venha nos fazer uma visita!</h2>
              <address className='flex items-center gap-3'>
                <img src={Location} alt="" />
                <span>Rua 08 de agosto, 497</span>
              </address>
              mapa
            </header>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14967.08262012586!2d-40.30104631500234!3d-20.30975802847172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83d5d85374ee9%3A0x97595e7ea70ed809!2zVml0w7NyaWEsIEVT!5e0!3m2!1spt-PT!2sbr!4v1660780690245!5m2!1spt-PT!2sbr" width="100%" height="650" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>
      </section>
    </>
  )
}

export default Main