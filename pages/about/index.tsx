import { NextPage } from 'next';
import React from 'react';
import ParagraphByJsonFile from 'shared-resources/components/ListingComponents/ParagraphByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import aboutUsData from '../../public/assets/mocks/about/aboutUs.json';

const AboutUsPage: NextPage = () => (
  <>
    <GenericSetHead
      title='About Us, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'This is the about us section of Atomic Energy Central School, Narora Website. See our mission, the authority, board of members etc.',
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
      <div className='text-2xl text-center md:text-4xl'>About Us</div>
      <ParagraphByJsonFile jsonObject={aboutUsData} />
    </div>
  </>
);

export default React.memo(AboutUsPage);
