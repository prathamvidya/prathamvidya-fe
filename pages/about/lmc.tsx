import { NextPage } from 'next';
import React from 'react';
import TableByJsonFile from 'shared-resources/components/ListingComponents/TableByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import lmcData from '../../public/assets/mocks/about/lmc/lmc.json';

const LMCPage: NextPage = () => (
  <>
    <GenericSetHead
      title='Local Management Committee, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'List of Local Management Committee of Atomic Energy Central School, Narora (AECS Narora)',
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
        Local Management Committee
      </div>
      <TableByJsonFile jsonObject={lmcData} />
    </div>
  </>
);

export default React.memo(LMCPage);
