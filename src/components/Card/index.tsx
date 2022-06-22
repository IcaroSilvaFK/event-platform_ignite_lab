import { CaretRight } from 'phosphor-react';

interface ICardProps {
  title: string;
  icon: JSX.Element;
  description: string;
}

export function Card({ description, icon, title }: ICardProps) {
  return (
    <div className='flex bg-gray-700 rounded hover:bg-gray-600'>
      <div
        className='
      bg-green-700 text-white flex items-center justify-center w-[85.9px] h-[134px]
      rounded-tl rounded-bl transition'
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
    </div>
  );
}
