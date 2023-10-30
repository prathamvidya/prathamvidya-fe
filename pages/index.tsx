import type { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import GenericSetHead from 'shared/GenericSetHead';
import wrapper from '../src/redux/store';
import nextPrismicFetch, {
  NextPageProps,
} from '../src/shared/next-prismic-fetch/next-prismic-fetch';
import HomePageView from '../src/views/Home/HomePageView';

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  nextPrismicFetch(store, true)
);

const Home: NextPage<NextPageProps> = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  if (!prismicDataState) {
    return null;
  }

  return (
    <>
      <GenericSetHead
        title={`Home, ${prismicDataState?.settings.site_title}`}
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
      <HomePageView />
    </>
  );
};

export default Home;
