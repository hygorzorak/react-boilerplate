import Head from 'next/head';
import { useMemo } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Box, Icon, Stack, Text } from '@chakra-ui/react';

import { Gallery, Player } from '@/components/atom';
import { useGetSongs } from '@/business-layer/api';
import { useSelected } from '@/business-layer/store';

type AlbumProps = {
  song: Song;
};

export function Album({ song }: AlbumProps) {
  const { data } = useGetSongs();
  const [, setSelected] = useSelected();

  const songs = useMemo(() => {
    if (song?.related && data) {
      return data.filter((item) => song.related.includes(item.id)) || [];
    }
    return [];
  }, [song, data]);

  return (
    <>
      <Head>
        <title>Moises AI | Album</title>
        <meta name="description" content="Moises AI | Album" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Icon
        as={FaArrowLeft}
        position="fixed"
        boxSize="32px"
        m="20px"
        cursor="pointer"
        onClick={() => setSelected(0)}
      />
      <Box
        w="full"
        h="full"
        bgImage={`
          linear-gradient(to bottom, #12303B 0%, rgba(18, 48, 59, 0.00) 100%),
          url('/path-to-your-image.jpg')
        `}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Stack padding="73px 144px">
          <Player song={song} />
          <Text fontSize="15px" fontWeight={500} mt="94px" color="rgba(255, 255, 255, 0.70)">
            Other albums
          </Text>
          <Gallery data={songs} />
        </Stack>
      </Box>
    </>
  );
}
