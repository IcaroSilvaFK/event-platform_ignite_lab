import Code from '../../assets/code_mock.png';
import React from '../../assets/ReactJS.png';
import { Footer } from '../../components/Footer';
import { LogoIcon } from '../../components/LogoSvg';

export function Login() {
  return (
    <main className='w-full min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center pt-5'>
      <section className='w-full max-w-[1100px] flex items-center justify-center pt-12 relative'>
        <img src={React} alt='' className='absolute z-0' />
        <div className='flex items-center w-full max-w-[1100px] justify-between z-10'>
          <article className='flex flex-col gap-4 max-w-[640px]'>
            <LogoIcon />
            <h3 className='text-[2.5rem]'>
              Contrua uma{' '}
              <span className='text-blue-500'>aplicação completa</span>, do
              zero, com <span className='text-blue-500'>React</span>
            </h3>
            <p className='text-gray-200'>
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </article>
          <div className='p-4 bg-gray-700 rounded flex flex-col gap-2 w-[30%] '>
            <strong className='text-gray-100'>Inscreva-se gratuitamente</strong>
            <form className='flex flex-col gap-3 w-full'>
              <input
                type='text'
                placeholder='Seu nome completo'
                className=' bg-gray-900 outline-none p-2 rounded'
              />
              <input
                type='text'
                placeholder='Digite sue email'
                className=' bg-gray-900 outline-none p-2 rounded'
              />
              <button
                type='button'
                className='bg-green-500 text-white p-2 rounded font-bold text-sm mt-2 hover:bg-green-700 transition-colors'
              >
                Grantir minha vaga
              </button>
            </form>
          </div>
        </div>
      </section>
      <div>
        <img src={Code} alt='Code' height={500} />
      </div>
      <Footer />
    </main>
  );
}
