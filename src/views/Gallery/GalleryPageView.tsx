import { FilledLinkToWebField } from '@prismicio/client';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import GalleryByJsonFile from 'shared-resources/components/ListingComponents/GalleryByJsonFile';
import ListingByJsonFile from 'shared-resources/components/ListingComponents/ListingByJsonFile';

interface GalleryPageViewProps {}

const GalleryPageView: React.FC<GalleryPageViewProps> = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  if (!prismicDataState) {
    return null;
  }
  return (
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>Gallery</div>
      {prismicDataState && (
        <GalleryByJsonFile
          jsonObject={{
            'Special Events': prismicDataState?.gallery?.images?.map(
              (i) => i?.url?.url || ''
            ),
          }}
        />
      )}
      <ListingByJsonFile
        jsonObject={{
          'Our Full Gallery': prismicDataState?.gallery?.drive_links?.map(
            (i) => ({
              title: i?.title || 'Drive Link',
              target: (i?.url as FilledLinkToWebField)?.url || '',
            })
          ),
        }}
      />
    </div>
  );
};

export default React.memo(GalleryPageView);
