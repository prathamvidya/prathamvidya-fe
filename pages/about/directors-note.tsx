import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import GenericSetHead from 'shared/GenericSetHead';
import DirectorsNoteView from 'views/AboutUs/DirectorsNoteView';

const DirectorsNotePage: NextPage = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  if (!prismicDataState) {
    return null;
  }
  return (
    <>
      <GenericSetHead
        title={`Director's Note, ${prismicDataState?.settings.site_title}`}
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
      <DirectorsNoteView />
    </>
  );
};

export default React.memo(DirectorsNotePage);
