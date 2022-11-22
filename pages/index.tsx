import Head from 'next/head';
import { Flex, Heading, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Science HUB React Base</title>
        <meta name="description" content="Science HUB React Base" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction={'column'} justify={'center'} align={'center'} h={'100vh'}>
        <Heading as="h1" size="2xl" role="heading">
          Welcome to Science HUB
        </Heading>
        <Text as="i">Powered by Altos Lab</Text>
      </Flex>
    </>
  );
}
