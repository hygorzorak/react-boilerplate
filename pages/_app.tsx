import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { LitteraProvider } from '@assembless/react-littera';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Provider as JotaiProvider } from 'jotai';

import type { AppProps } from 'next/app';

import { queryClient } from '_config/rq-config';

import theme from '@/styles/theme';
import '@/styles/globals.scss';

const customTheme = extendTheme(theme);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={customTheme}>
          <LitteraProvider locales={['en_US']}>
            <Component {...pageProps} />
          </LitteraProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </JotaiProvider>
  );
}
