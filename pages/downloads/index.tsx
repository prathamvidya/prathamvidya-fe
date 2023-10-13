import { NextPage } from 'next';
import React from 'react';
import ListingByJsonFile from 'shared-resources/components/ListingComponents/ListingByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import downloadsData from '../../public/assets/mocks/downloads/downloads.json';

const DownloadPage: NextPage = () => (
  <>
    <GenericSetHead
      title='Downloads Section, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'This is the downloads section of Atomic Energy Central School, Narora Website. We have study material, documents, legal documents, forms etc. for students, parents and other users to view and download.',
        },
        {
          property: 'robots',
          content: 'index, follow',
        },
        {
          property: 'viewport',
          content: 'width=device-width, initial-scale=1.0',
        },
      ]}
    />
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>Downloads</div>
      <ListingByJsonFile jsonObject={downloadsData} />
    </div>
  </>
);

export default React.memo(DownloadPage);
