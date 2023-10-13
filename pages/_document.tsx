import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import store from 'redux/store';

const MyDocument = (): React.ReactElement => (
  <Html>
    <Head />
    <body className='text-slate-900 bg-slate-100 dark:bg-slate-900 font-[JosefinSans] dark:text-slate-100 relative transition-colors duration-300'>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default store.withRedux(MyDocument);
