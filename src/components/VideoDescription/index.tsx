import { DiscordLogo, Lightning } from 'phosphor-react';
import { Button } from '../Buttons';

interface IVideoDescriptionProps {
  title?: string;
  description?: string;
}

export function VideoDescription({
  title,
  description,
}: IVideoDescriptionProps) {
  return (
    <div className='flex items-start justify-between p-8 max-w-[1100px] mx-auto'>
      <div className='flex-1'>
        <h1 className='text-2xl mb-2'>{title}</h1>
        <p className='text-gray-300  max-w-[600px]'>{description}</p>
      </div>
      <div className='shrink flex flex-col gap-4'>
        <Button
          href='/'
          type='contains'
          icon={<DiscordLogo size={25} weight='bold' />}
        >
          comunidade do discord
        </Button>
        <Button
          href='/'
          type='outline'
          icon={<Lightning size={25} weight='bold' />}
        >
          Acesse o desafio
        </Button>
      </div>
    </div>
  );
}
