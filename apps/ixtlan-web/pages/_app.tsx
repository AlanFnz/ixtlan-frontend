import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ixtlan</title>
      </Head>
      <main className="app">
        <Header />
        <Navbar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
