import { NextPage } from 'next';
import React from 'react';
import DatedListingByJsonFile from 'shared-resources/components/ListingComponents/DatedListingByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import {
  JsonAnnouncementDataType,
  JsonNoticesDataType,
} from 'types/ListingJsonData.type';
import noticesData from '../../public/assets/mocks/notices/notices.json';

const NoticesPage: NextPage = () => (
  <>
    <GenericSetHead
      title='Notices, AECS Narora'
      metadata={[
        {
          property: 'description',
          content:
            'All the notices, announcements, circulars etc. of Atomic Energy Central School, Narora (AECS Narora)',
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
      <div className='text-2xl text-center md:text-4xl'>Notices</div>
      <DatedListingByJsonFile
        jsonObject={Object.keys(noticesData as JsonNoticesDataType).reduce(
          (prev, category) => ({
            ...prev,
            [category]: (noticesData as JsonNoticesDataType)[category].map(
              (item: JsonAnnouncementDataType) => ({
                title: item.title,
                target: `/notices/${item.id}`,
                date: item?.date,
              })
            ),
          }),
          {}
        )}
      />
    </div>
  </>
);

export default React.memo(NoticesPage);
