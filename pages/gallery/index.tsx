import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import wrapper from 'redux/store';
import GenericSetHead from 'shared/GenericSetHead';
import nextPrismicFetch from 'shared/next-prismic-fetch/next-prismic-fetch';
import GalleryPageView from 'views/Gallery/GalleryPageView';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  nextPrismicFetch(store, true)
);

const GalleryPage: NextPage = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  if (!prismicDataState) {
    return null;
  }
  return (
    <>
      <GenericSetHead
        title={`Gallery, ${prismicDataState?.settings.site_title}`}
        metadata={[
          {
            property: 'description',
            content: `${prismicDataState?.settings.meta_description}`,
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
      <GalleryPageView />
    </>
  );
};

export default React.memo(GalleryPage);
