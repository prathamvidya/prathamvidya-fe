import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import DatedListingByJsonFile from 'shared-resources/components/ListingComponents/DatedListingByJsonFile';

interface NoticesPageViewProps {}

const NoticesPageView: React.FC<NoticesPageViewProps> = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  return (
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>Notices</div>
      {prismicDataState?.notices && (
        <DatedListingByJsonFile
          jsonObject={prismicDataState?.notices.reduce(
            (prev, notice) => ({
              ...prev,
              [notice.type]: [
                ...((prev as any)[notice.type] || []),
                {
                  title: notice.title,
                  target: `/notices/${(notice as any).uid}`,
                  date: notice.date_time?.toString(),
                },
              ],
            }),
            {}
          )}
        />
      )}
    </div>
  );
};

export default React.memo(NoticesPageView);
