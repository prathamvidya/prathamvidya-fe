import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import wrapper from 'redux/store';
import GenericSetHead from 'shared/GenericSetHead';
import nextPrismicFetch from 'shared/next-prismic-fetch/next-prismic-fetch';
import NoticesPageView from 'views/Notices/NoticesPageView';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  nextPrismicFetch(store, true)
);

const NoticesPage: NextPage = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  if (!prismicDataState) {
    return null;
  }
  return (
    <>
      <GenericSetHead
        title={`Notices, ${prismicDataState?.settings.site_title}`}
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
      <NoticesPageView />
    </>
  );
};

export default React.memo(NoticesPage);
