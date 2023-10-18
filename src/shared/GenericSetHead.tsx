import React from 'react';
import Head from 'next/head';

interface GenericSetHeadProps {
  title: string;
  metadata?: Array<{
    property: string;
    content: string;
  }>;
  keyword?: string;
}

const GenericSetHead: React.FC<GenericSetHeadProps> = (props) => {
  const { title, metadata, keyword } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name='title' content={`${title}`} />
      <meta property='keyword' content={`${keyword}`} />
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:title' content={`${title}`} />
      <meta property='og:title' content={`${title}`} />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Pratham Vidya' />
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
      {/* TODO: need to optimised */}
      {(metadata || []).map((meta, index) => {
        if (meta.property === 'description') {
          return (
            <React.Fragment key={index}>
              <meta property={`${meta.property}`} content={meta.content} />
            </React.Fragment>
          );
        }
        return null;
      })}
      {(metadata || []).map((meta, index) => {
        if (
          meta.property === 'description' ||
          meta.property === 'image' ||
          meta.property === 'url'
        ) {
          return (
            <React.Fragment key={index}>
              <meta property={`og:${meta.property}`} content={meta.content} />
              <meta
                property={`twitter:${meta.property}`}
                content={meta.content}
              />
            </React.Fragment>
          );
        }
        return null;
      })}
    </Head>
  );
};

export default GenericSetHead;
