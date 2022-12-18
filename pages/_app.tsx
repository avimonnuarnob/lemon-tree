import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

import '../styles/globals.css';
import '../styles/fonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { AppProps } from 'next/app';

import MainLayout from '../components/layout/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}
