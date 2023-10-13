/* eslint-disable @next/next/no-img-element */
import React from 'react';
import AppComponentWrapper from 'hoc/AppComponentWrapper';
import { ThemeProvider } from 'next-themes';
import App, { AppInitialProps } from 'next/app';
import '../src/index.scss';
import wrapper from '../src/redux/store';

class WrappedApp extends App<AppInitialProps> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider attribute='class' enableSystem={false} defaultTheme='dark'>
        <div className='bg-no-repeat bg-[url("/assets/img/dark-background-blue.avif")]  lg:pt-0'>
          <img
            src='/assets/img/dark-background-blue-2.avif'
            className='absolute top-0 w-full h-full opacity-50 -z-10 lg:pt-0 blur-3xl'
            alt=''
          />
          <AppComponentWrapper>
            <div className='xl:mx-auto'>
              <Component {...pageProps} />
            </div>
          </AppComponentWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
