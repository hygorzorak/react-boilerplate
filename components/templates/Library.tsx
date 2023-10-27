import Head from 'next/head';
import { useMemo, useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Stack,
  Switch,
  Text,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

import { Gallery, SearchInput } from '@/components/atom';
import { useGetSongs } from '@/business-layer/api';
import { useFavorites } from '@/business-layer/store';

type LibraryProps = {};

export function Library({}: LibraryProps) {
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites] = useFavorites();

  const { data: songs } = useGetSongs();

  const filteredData = useMemo(() => {
    if (showFavorites) {
      return songs?.filter((song) => favorites.includes(song.id)) || [];
    }
    return songs;
  }, [showFavorites, favorites, songs]);

  return (
    <>
      <Head>
        <title>Moises AI | Library</title>
        <meta name="description" content="Moises AI | Library" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack margin="20px 144px">
        <Flex direction="column" height="69px">
          <Flex justify="space-between" padding="50px 0 20px" width="100%" flexWrap="wrap">
            <Flex direction="column">
              <Flex align="flex-end">
                <Heading>Your Library</Heading>
                <Button
                  m="0 8px"
                  onClick={() => setShowFavorites(!showFavorites)}
                  bg={showFavorites ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.15)'}
                  _hover={{ bg: 'rgba(255, 255, 255, 0.25)' }}
                  _active={{ bg: 'rgba(255, 255, 255, 0.25)' }}
                >
                  <Icon
                    as={showFavorites ? FaHeart : FaRegHeart}
                    color={showFavorites ? '#F8594E' : 'white'}
                  />
                  Favorites
                </Button>
              </Flex>
              <Text fontSize="16px" m="11px 0" color="rgba(255, 255, 255, 0.50)">
                You have 10 songs in your library
              </Text>
            </Flex>
            <Flex align="flex-start">
              <FormControl display="flex" alignItems="center" margin="6px 24px">
                <FormLabel htmlFor="sort" mb="0">
                  Sort from A-Z
                </FormLabel>
                <Switch id="sort" size="lg" />
              </FormControl>
              <SearchInput />
            </Flex>
          </Flex>
          <Gallery data={filteredData} />
        </Flex>
      </Stack>
    </>
  );
}
