import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import store from 'redux/store';

const MyDocument = (): React.ReactElement => (
  <Html>
    <Head />
    <body className='relative font-[Montserrat] transition-colors duration-300 text-secondaryLight bg-primaryLight dark:bg-primaryDark dark:text-secondaryDark'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default store.withRedux(MyDocument);
