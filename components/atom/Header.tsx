import { Flex, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex align="center" bg="#1D1D1D" h="130px" w="100vw" padding="0 145px" zIndex={1000}>
      <Text
        fontFamily="Nokora"
        fontSize="20px"
        fontWeight="900"
        background="linear-gradient(180deg, #00F2D5 0%, #AD00FF 100%);"
        backgroundClip="text"
        cursor="pointer"
      >
        HEADER EXAMPLE
      </Text>
    </Flex>
  );
}
