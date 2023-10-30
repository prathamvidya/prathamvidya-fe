/* eslint-disable @next/next/no-img-element */
import { PrismicPreview } from '@prismicio/next';
import AppComponentWrapper from 'hoc/AppComponentWrapper';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { repositoryName } from 'prismicio';
import React from 'react';
import '../src/index.scss';
import wrapper from '../src/redux/store';

// eslint-disable-next-line react/prefer-stateless-function
class WrappedApp extends React.Component<AppProps> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider attribute='class' enableSystem={false}>
        {/* bg-[url("/assets/img/dark-background-blue.avif")]: Add to below div */}
        <div className='bg-no-repeat lg:pt-0'>
          {/* <img
            src='/assets/img/dark-background-blue-2.avif'
            className='absolute top-0 w-full h-full opacity-50 -z-10 lg:pt-0 blur-3xl'
            alt=''
          /> */}
          <AppComponentWrapper>
            <div className='xl:mx-auto'>
              <Component {...pageProps} />
              {process.env.NODE_ENV === 'development' && (
                <PrismicPreview repositoryName={repositoryName} />
              )}
            </div>
          </AppComponentWrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default wrapper.withRedux(WrappedApp);
