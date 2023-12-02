import { useQuery } from '@tanstack/react-query';
import { RqQueryKey } from '../tactics/keys/queries';

async function fetchSongs() {
  const response = await fetch('/songs.json');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useGetSongs() {
  return useQuery([RqQueryKey.Songs], fetchSongs, {
    select: ({ songs }: { songs: Song[] }) => songs,
  });
}
