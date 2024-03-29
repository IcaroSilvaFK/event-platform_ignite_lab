import { Link } from 'react-router-dom';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt';

import Arrow from '../../assets/arrow.png';

interface ILessonProps {
  title: string;
  lessonType: 'class' | 'live';
  availableAt: string;
  onClick: () => void;
  isActive: boolean;
  slug: string;
}

export function Lesson({
  title,
  lessonType,
  availableAt,
  onClick,
  isActive,
  slug,
}: ILessonProps) {
  const isLessonAvailable = isPast(new Date(availableAt));
  const availableDateFormatted = format(
    new Date(availableAt),
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  return (
    <Link
      to={`/event/lesson/${slug}`}
      onClick={onClick}
      className='relative group'
    >
      <span className='text-gray-300'>{availableDateFormatted}</span>
      {isActive && (
        <div className='absolute -left-4 top-[50%]'>
          <img src={Arrow} alt='Chat Icon' />
        </div>
      )}
      <div
        className={
          isActive
            ? 'bg-green-500 text-white rounded p-4 mt-2 relative z-10'
            : 'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500'
        }
      >
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span
              className={`text-sm ${
                isActive ? 'text-white' : 'text-blue-500'
              } font-medium flex items-center gap-1 `}
            >
              <CheckCircle size={20} weight='bold' />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-1'>
              <Lock size={20} weight='bold' />
              Em breve
            </span>
          )}

          <span
            className={`text-xs rounded px-2 py-[2px] text-white border ${
              isActive ? 'border-whtie' : 'border-green-300'
            } font-bold uppercase`}
          >
            {lessonType === 'class' ? 'aula prática' : 'ao vivo'}
          </span>
        </header>
        <strong
          className={`${isActive ? 'text-white' : 'text-gray-200'} mt-5 block`}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
