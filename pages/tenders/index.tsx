import { NextPage } from 'next';
import React from 'react';
import ListingByJsonFile from 'shared-resources/components/ListingComponents/ListingByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import tendersData from '../../public/assets/mocks/tenders/tenders.json';

const TenderPage: NextPage = () => (
  <>
    <GenericSetHead
      title='Tenders, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'This is the tenders page of Atomic Energy Central School, Narora Website which contains documents for currently active tenders as well as previous tenders.',
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
      <div className='text-2xl text-center md:text-4xl'>Tenders</div>
      <ListingByJsonFile jsonObject={tendersData} />
    </div>
  </>
);

export default React.memo(TenderPage);
