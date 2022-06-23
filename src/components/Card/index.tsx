import { CaretRight } from 'phosphor-react';

interface ICardProps {
  title: string;
  icon: JSX.Element;
  description: string;
  href: string;
}

export function Card({ description, icon, title, href }: ICardProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='norrefer '
      className='flex bg-gray-700 rounded hover:bg-gray-600 overflow-hidden transition-colors'
    >
      <div
        className='
      bg-green-700 text-white flex items-center justify-center w-[85.9px] h-[134px]
      transition'
      >
        {icon}
      </div>
      <div className='flex items-center ml-2 px-4'>
        <div className='flex flex-col'>
          <span className='text-2xl font-bol mb-1'>{title}</span>
          <p className='text-sm text-gray-300 w-[279.66px]'>{description}</p>
        </div>
        <CaretRight size={24} weight='bold' color='#81D8F7' />
      </div>
    </a>
  );
}
