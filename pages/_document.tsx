import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import store from 'redux/store';

const MyDocument = (): React.ReactElement => (
  <Html>
    <Head />
    <body className='text-secondaryLight bg-primaryLight dark:bg-primaryDark font-[JosefinSans] dark:text-secondaryDark relative transition-colors duration-300'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default store.withRedux(MyDocument);
