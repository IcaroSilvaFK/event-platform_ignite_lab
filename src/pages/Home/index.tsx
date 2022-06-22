import { gql, useQuery } from '@apollo/client';
import { DiscordLogo } from 'phosphor-react';
import { Button } from '../../components/Buttons';

interface IQueryProps {
  id: string;
  lessonType: string;
  publishedAt: string;
  slug: string;
  stage: string;
  title: string;
  videoId: string;
  description: string;
  teacher: {
    avatarURL: string;
    name: string;
  };
}
const LESON_QUERY = gql`
  query {
    lessons {
      title
      stage
      slug
      videoId
      publishedAt
      lessonType
      id
      description
      teacher {
        avatarURL
        name
      }
    }
  }
`;

export function Home() {
  const { loading, error, data } = useQuery<{ lessons: IQueryProps[] }>(
    LESON_QUERY
  );
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (!!error) {
    return <h1>Error!</h1>;
  }
  return (
    <div>
      {data?.lessons.map((lesson) => (
        <div>
          <h1>{lesson.title}</h1>
        </div>
      ))}
      <Button
        text='comunidade do discord'
        type='contains'
        icon={<DiscordLogo size={25} weight='bold' />}
      />
    </div>
  );
}
