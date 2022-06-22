import { LogoIcon } from '../LogoSvg';

export function Header() {
  return (
    <header className='flex justify-center items-center py-5 w-full bg-gray-700 border-b border-gray-600'>
      <LogoIcon />
    </header>
  );
}
