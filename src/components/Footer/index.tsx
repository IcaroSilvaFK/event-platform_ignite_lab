import Logo from '../../assets/logorockeat.png';

export function Footer() {
  return (
    <footer className='w-full border-t border-gray-500  bg-gray-600 flex items-center justify-between py-4 px-5 mt-20'>
      <div className='flex  items-center'>
        <img src={Logo} alt='Logo Rocketseat' width={162} />
        <div className='ml-4 text-gray-300'>
          <p>Rocketseat - Todos os direitos reservados</p>
        </div>
      </div>
      <p>Políticas de privacidade</p>
    </footer>
  );
}
