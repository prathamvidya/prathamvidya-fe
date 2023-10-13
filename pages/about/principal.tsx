import { NextPage } from 'next';
import React from 'react';
import MessageByJsonFile from 'shared-resources/components/ListingComponents/MessageByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import principalDeskData from '../../public/assets/mocks/about/principal/principal.json';

const PrincipalDeskPage: NextPage = () => (
  <>
    <GenericSetHead
      title="Principal's Desk, AECS Narora"
      metadata={[
        {
          property: 'description',
          content:
            'This is the message from the Principal of Atomic Energy Central School, Narora.',
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
      <div className='text-2xl text-center md:text-4xl'>
        Principal&apos;s Desk
      </div>
      <MessageByJsonFile jsonObject={principalDeskData} />
    </div>
  </>
);

export default React.memo(PrincipalDeskPage);
