import { NextPage } from 'next';
import React from 'react';
import TableByJsonFile from 'shared-resources/components/ListingComponents/TableByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import strengthData from '../../public/assets/mocks/about/strength/strength.json';

const StrengthPage: NextPage = () => (
  <>
    <GenericSetHead
      title='Strength, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'Class-wise Strength of Atomic Energy Central School, Narora (AECS Narora)',
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
      <div className='text-2xl text-center md:text-4xl'>Strength</div>
      <TableByJsonFile jsonObject={strengthData} />
    </div>
  </>
);

export default React.memo(StrengthPage);
