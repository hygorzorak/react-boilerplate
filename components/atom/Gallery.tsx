import Image from 'next/image';
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';

import { useFavorites, useSelected } from '@/business-layer/store';

type GalleryProps = {
  data?: Song[];
};

export function Gallery({ data }: GalleryProps) {
  const [favorites, setFavorites] = useFavorites();
  const [, setSelected] = useSelected();
  
  const handleFavorites = (id: number) => {
    if (favorites.find((f) => f === id)) {
      return setFavorites(favorites.filter((f) => f !== id));
    }
    const newData = favorites;
    newData?.push(id);
    setFavorites(newData);
  };

  return (
    <Grid
      padding="20px 0"
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(5, 1fr)',
      }}
      gap={6}
    >
      {data?.map((item) => (
        <GridItem>
          <Card h="282px" w="204px" mb="34px">
            <CardBody m={0} p={0}>
              <Image
                height={204}
                width={204}
                src={`/${item.song.files.coverArt}`}
                alt={item.song.title}
              />
            </CardBody>
            <CardFooter bg="#1D1D1D">
              <Flex direction="column" w="100%">
                <Text
                  color="white"
                  fontSize="18px"
                  cursor="pointer"
                  fontWeight={600}
                  onClick={() => setSelected(item.id)}
                  isTruncated
                >
                  {item.song.title}
                </Text>
                <Flex justify="space-between" w="100%" mt="11px">
                  <Text color="#666" fontSize="12px" fontWeight={600} isTruncated>
                    {item.song.artist}
                  </Text>
                  <Box>
                    <Icon
                      as={favorites.find((f) => f === item.id) ? FaHeart : FaRegHeart}
                      color={favorites.find((f) => f === item.id) ? '#F8594E' : 'white'}
                      boxSize="20px"
                      cursor="pointer"
                      onClick={() => handleFavorites(item.id)}
                    />
                  </Box>
                </Flex>
              </Flex>
            </CardFooter>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
}
