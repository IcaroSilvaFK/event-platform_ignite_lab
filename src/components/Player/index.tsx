import { useQuery, gql } from '@apollo/client';
import { FileArrowDown, Image } from 'phosphor-react';

import { Teacher } from '../Teacher';
import { VideoDescription } from '../VideoDescription';
import { Card } from '../Card';
import { Footer } from '../Footer';

interface IQueryProps {
  slug: string;
  title: string;
  videoId: string;
  description: string;
  teacher: {
    avatarURL: string;
    name: string;
    bio: string;
  };
}

const QUERY_LESSON = gql`
  query {
    lesson(where: { id: "cl4pwg9cpdeaq0blsdx1hl1za" }) {
      title
      slug
      description
      videoId
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;
export function Player() {
  const { data } = useQuery<{ lesson: IQueryProps }>(QUERY_LESSON);
  console.log(data);
  return (
    <div className='flex-1'>
      <div className='w-full h-[617px]'></div>
      <VideoDescription
        description={data?.lesson.description}
        title={data?.lesson.title}
      />
      <div>
        {data?.lesson && (
          <Teacher
            avatarURL={data?.lesson.teacher.avatarURL}
            bio={data?.lesson.teacher.bio}
            name={data?.lesson.teacher.name}
          />
        )}
      </div>
      <div className='flex  justify-around mt-4'>
        <Card
          title='Material complementar'
          description='Acesse o material complementar para acelerar o seu desenvolvimento'
          icon={<FileArrowDown size={39} weight='bold' />}
        />

        <Card
          title='Wallpapers exclusivos'
          description='Baixe wallpapers exclusivos do Ignite Lab e personaliza sua máquina'
          icon={<Image size={39} weight='bold' />}
        />
      </div>
      <Footer />
    </div>
  );
}
