import { NextPage } from 'next';
import React from 'react';
import ParagraphByJsonFile from 'shared-resources/components/ListingComponents/ParagraphByJsonFile';
import TableByJsonFile from 'shared-resources/components/ListingComponents/TableByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import aeesParagraphData from '../../public/assets/mocks/about/aees/aees.json';
import aeesCouncilData from '../../public/assets/mocks/about/aees/aees_council.json';

const AboutAEESPage: NextPage = () => (
  <>
    <GenericSetHead
      title='About AEES'
      metadata={[
        {
          property: 'description',
          content: 'About Atomic Energy Education Society (AEES)',
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
      <div className='text-2xl text-center md:text-4xl'>About AEES</div>
      <ParagraphByJsonFile jsonObject={aeesParagraphData} />
      <TableByJsonFile jsonObject={aeesCouncilData} />
    </div>
  </>
);

export default React.memo(AboutAEESPage);
