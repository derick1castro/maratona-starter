import React from 'react'
import Hero from '../assets/img/hero.png'
import CardOne from '../assets/img/card1.png'
import CardTwo from '../assets/img/card2.png'
import CardTre from '../assets/img/card3.png'
import Location from '../assets/img/location.svg'

function Main() {
  return (
    <>
      <section className='bg-[#0b090a] text-white '>
        <div className='flex  justify-between items-center max-w-[1280px] m-auto gap-[32px] px-[72px]'>
          <div className='flex flex-1 flex-col items-start gap-[16px] py-[96px]'>
            <h1 className='text-5xl text-whit font-bold'>Uma nova experiência em barbearia</h1>
            <p className='text-lg font-bold max-w-[520px]'>Experimente mudar totalmente sua maneira de ir ao barbeiro com inovação, bom atendimento e com certeza, muito estilo!</p>
            <button className='py-5 px-10 bg-[#ba181b] border-0 text-lg'>Agendar Horário</button>
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
      <section className='bg-[#f5f3f4] flex justify-between items-center max-w-[1280px] m-auto'>
        <div className='pt-[48px] px-[24px]'>
          <header className='p-[48px]'>
              <span className='text-[#e5383b] font-bold uppercase'>Onde estamos</span>
              <h2 className='text-4xl font-bold'>Venha nos fazer uma visita!</h2>
              <address className='flex items-center gap-3'>
                <img src={Location} alt="" />
                <span>Rua 08 de agosto, 497</span>
              </address>
              mapa
            </header>
        </div>
      </section>
    </>
  )
}

export default Main