import { PrismicRichText } from '@prismicio/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataNoticesSelector } from 'redux/selectors/ui.selectors';
import BrandCardWithShadow from 'shared-resources/components/BrandCardWithShadow';
import ListingByJsonFile from 'shared-resources/components/ListingComponents/ListingByJsonFile';
import { Utils } from 'utils/Utils';

interface SingleNoticePageViewProps {}

const SingleNoticePageView: React.FC<SingleNoticePageViewProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const prismicDataNoticesState = useSelector(prismicDataNoticesSelector);

  const notice = prismicDataNoticesState?.find((v) => (v as any).uid === id);

  return (
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>Notice</div>
      {notice ? (
        <div className='mt-10'>
          <BrandCardWithShadow className='rounded-lg text-secondaryLight/80 dark:text-secondaryDark shadow-nft dark:shadow-nftDark bg-primaryDark/[15%] dark:bg-primaryLight/10 !p-10 font-normal tracking-wide text-[17px]'>
            <div className='text-right'>
              Dated: {Utils.convertISOtoIST(notice.date_time?.toString()!)}
            </div>
            <h2 className='mt-10 text-xl font-bold text-center capitalize md:text-3xl'>
              {notice.title}
            </h2>
            <div className='my-10 text-justify'>
              <PrismicRichText field={notice.description} />
            </div>
            <ListingByJsonFile
              jsonObject={{
                Attachments: notice.attachments.map((a) => ({
                  title: a.attachment_title?.toString()!,
                  target: (a.document_link as any).url,
                })),
              }}
            />
          </BrandCardWithShadow>
        </div>
      ) : (
        <div className='text-center my-14'>No Data Found!</div>
      )}
    </div>
  );
};

export default React.memo(SingleNoticePageView);
