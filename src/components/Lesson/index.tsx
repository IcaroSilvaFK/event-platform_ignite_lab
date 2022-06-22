import { Link } from 'react-router-dom';
import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt';

interface ILessonProps {
  title: string;
  lessonType: 'class' | 'live';
  availableAt: string;
  slug: string;
}

export function Lesson({ title, lessonType, availableAt, slug }: ILessonProps) {
  const isLessonAvailable = isPast(new Date(availableAt));
  const availableDateFormatted = format(
    new Date(availableAt),
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );
  console.log(availableDateFormatted);
  return (
    <Link to='/'>
      <span className='text-gray-300'>{availableDateFormatted}</span>
      <div className='rounded border border-gray-500 p-4 mt-2'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='text-sm text-blue-500 font-medium flex items-center gap-1'>
              <CheckCircle size={20} weight='bold' />
              Conteúdo liberado
            </span>
          ) : (
            <span className='text-sm text-orange-500 font-medium flex items-center gap-1'>
              <Lock size={20} weight='bold' />
              Em breve
            </span>
          )}

          <span className='text-xs rounded px-2 py-[2px] text-white border border-green-300 font-bold uppercase'>
            {lessonType === 'class' ? 'aula prática' : 'ao vivo'}
          </span>
        </header>
        <strong className='text-gray-200 mt-5 block'>{title}</strong>
      </div>
    </Link>
  );
}
