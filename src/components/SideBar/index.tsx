import { gql, useQuery } from '@apollo/client';
import { useVideo } from '../../hooks/useVideo';

import { Lesson } from '../Lesson';

interface ILessionsResponseProps {
  title: string;
  slug: string;
  lessonType: 'class' | 'live';
  id: string;
  availableAt: string;
}

const QUERY_LESSONS = gql`
  query {
    lessons {
      title
      slug
      lessonType
      availableAt
      id
    }
  }
`;

export function SideBar() {
  const { setCurrentId, currentVideo } = useVideo();
  const { data } = useQuery<{ lessons: ILessionsResponseProps[] }>(
    QUERY_LESSONS
  );

  function changeCurrentId(id: string) {
    setCurrentId(id);
  }

  return (
    <aside className='w-[348px] bg-gray-700 p-6 border-l border-gray-600'>
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
        Cronogramas de aulas
      </span>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map((lesson) => (
          <Lesson
            {...lesson}
            key={lesson.id}
            isActive={currentVideo?.id === lesson.id}
            onClick={() => changeCurrentId(lesson.id)}
          />
        ))}
      </div>
    </aside>
  );
}
