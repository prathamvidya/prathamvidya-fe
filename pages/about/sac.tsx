import { NextPage } from 'next';
import React from 'react';
import TableByJsonFile from 'shared-resources/components/ListingComponents/TableByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import sacData from '../../public/assets/mocks/about/sac/sac.json';

const SACPage: NextPage = () => (
  <>
    <GenericSetHead
      title='School Advisory Committee, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'List of School Advisory Committee of Atomic Energy Central School, Narora (AECS Narora)',
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
        School Advisory Committee
      </div>
      <TableByJsonFile jsonObject={sacData} />
    </div>
  </>
);

export default React.memo(SACPage);
