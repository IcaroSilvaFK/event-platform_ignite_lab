import { useQuery, gql } from '@apollo/client';
import { FileArrowDown, Image } from 'phosphor-react';
import { Player, Youtube, DefaultUi } from '@vime/react';
import { useLocation } from 'react-router-dom';

import { Teacher } from '../Teacher';
import { VideoDescription } from '../VideoDescription';
import { Card } from '../Card';
import { Footer } from '../Footer';
import '@vime/core/themes/default.css';
import { useVideo } from '../../hooks/useVideo';
import { useEffect } from 'react';

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
export function PlayerVideo() {
  const { data } = useQuery<{ lesson: IQueryProps }>(QUERY_LESSON);
  const { currentVideo } = useVideo();
  console.log(currentVideo?.videoId);
  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center'>
        <div className='h-full w-full max-w-[1100px] max-h-[60vh] aspect-video'>
          {currentVideo && (
            <Player>
              <Youtube
                videoId={currentVideo.videoId}
                key={currentVideo.videoId}
              />
              <DefaultUi />
            </Player>
          )}
        </div>
      </div>
      <VideoDescription
        description={currentVideo?.description}
        title={currentVideo?.title}
      />
      <div>
        {currentVideo && (
          <Teacher
            avatarURL={currentVideo.teacher.avatarURL}
            bio={currentVideo.teacher.bio}
            name={currentVideo.teacher.name}
          />
        )}
      </div>
      <div className='flex  justify-around mt-20'>
        <Card
          title='Material complementar'
          description='Acesse o material complementar para acelerar o seu desenvolvimento'
          icon={<FileArrowDown size={39} weight='bold' />}
          href='/'
        />

        <Card
          title='Wallpapers exclusivos'
          description='Baixe wallpapers exclusivos do Ignite Lab e personaliza sua máquina'
          icon={<Image size={39} weight='bold' />}
          href='/'
        />
      </div>
      <Footer />
    </div>
  );
}
