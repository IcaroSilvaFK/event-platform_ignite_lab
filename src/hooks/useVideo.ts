import { useContext } from 'react';
import { VideoContext } from '../context/VideoContext';

export function useVideo() {
  const data = useContext(VideoContext);

  return data;
}
