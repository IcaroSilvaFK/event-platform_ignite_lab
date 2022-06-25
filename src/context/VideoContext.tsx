import { createContext, useState, useEffect, ReactNode } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const QUERY_LESSON = gql`
  query getLesson($id: ID!) {
    lesson(where: { id: $id }) {
      title
      slug
      description
      videoId
      id
      teacher {
        name
        bio
        avatarURL
      }
    }
  }
`;
interface IQueryProps {
  id: string;
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

interface IVideoContextProps {
  currentVideo: IQueryProps | null;
  setCurrentId: (id: string) => void;
}

export const VideoContext = createContext<IVideoContextProps>(
  {} as IVideoContextProps
);

export function VideoContextProvider({ children }: { children: ReactNode }) {
  const [currentVideo, setCurrentVideo] = useState<IQueryProps | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [getCurrentVideo] = useLazyQuery(QUERY_LESSON);

  useEffect(() => {
    (async () => {
      if (currentId) {
        const { data } = await getCurrentVideo({
          variables: { id: currentId },
        });

        setCurrentVideo(data.lesson);
        return;
      }
      const { data } = await getCurrentVideo({
        variables: { id: 'SO4-izct7Mc' },
      });

      setCurrentVideo(data.lesson);
    })();
  }, []);
  useEffect(() => {
    (async () => {
      if (currentId) {
        const { data } = await getCurrentVideo({
          variables: { id: currentId },
        });
        setCurrentVideo(data?.lesson);
        return;
      }
    })();
  }, [currentId]);

  return (
    <VideoContext.Provider value={{ currentVideo, setCurrentId }}>
      {children}
    </VideoContext.Provider>
  );
}
