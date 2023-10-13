import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import BrandCardWithShadow from 'shared-resources/components/BrandCardWithShadow';
import ListingByJsonFile from 'shared-resources/components/ListingComponents/ListingByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import { JsonAnnouncementDataType } from 'types/ListingJsonData.type';
import noticesData from '../../public/assets/mocks/notices/notices.json';

const NoticeByIdPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [notice, setNotice] = useState<JsonAnnouncementDataType>();

  useEffect(() => {
    setNotice(
      Object.values(noticesData)
        .flat()
        .find((item) => item.id === id)
    );
  }, [id]);
  return (
    <>
      <GenericSetHead
        title='Notice, AECS Narora'
        metadata={[
          {
            property: 'description',
            content:
              'Notice Page of Atomic Energy Central School, Narora (AECS Narora)',
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
        <div className='text-2xl text-center md:text-4xl'>Notice</div>
        {notice ? (
          <div className='mt-10'>
            <BrandCardWithShadow className='rounded-lg text-slate-900 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur !p-10 font-normal tracking-wide text-[17px]'>
              <div className='text-right'>Dated: {notice.date}</div>
              <h2 className='mt-10 text-xl font-bold text-center capitalize md:text-3xl'>
                {notice.title}
              </h2>
              <p className='my-10 text-justify'>{notice.description}</p>
              <ListingByJsonFile
                jsonObject={{ Attachments: notice.attachments }}
              />
            </BrandCardWithShadow>
          </div>
        ) : (
          <div className='text-center my-14'>No Data Found!</div>
        )}
      </div>
    </>
  );
};

export default React.memo(NoticeByIdPage);
