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
    <div className='flex items-center justify-between p-4'>
      <div className='p-4'>
        <h3 className='text-2xl mb-2'>{title}</h3>
        <p className='text-gray-300  max-w-[600px]'>{description}</p>
      </div>
      <div className='shrink flex flex-col gap-4'>
        <Button
          text='comunidade do discord'
          type='contains'
          icon={<DiscordLogo size={25} weight='bold' />}
        />
        <Button
          text='Acesse o desafio'
          type='outline'
          icon={<Lightning size={25} weight='bold' />}
        />
      </div>
    </div>
  );
}
