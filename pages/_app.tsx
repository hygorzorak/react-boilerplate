import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LitteraProvider } from '@assembless/react-littera';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import type { AppProps } from 'next/app';

import { queryClient } from '@/scaffolding/rq-config';

import theme from '@/styles/theme';
import '@/styles/globals.scss';

const altosTheme = extendTheme(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={altosTheme}>
        <LitteraProvider locales={['en_US']}>
          <Component {...pageProps} />
        </LitteraProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
