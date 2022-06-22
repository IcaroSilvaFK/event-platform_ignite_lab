import Logo from '../../assets/logorockeat.png';

export function Footer() {
  return (
    <footer className='w-full border-t border-gray-500 flex items-center py-4 px-2 mt-6'>
      <img src={Logo} alt='Logo Rocketseat' width={162} />
      <div className='ml-4 text-gray-300'>
        <p>Rocketseat - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
