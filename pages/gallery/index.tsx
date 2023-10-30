import { NextPage } from 'next';
import React from 'react';
import GenericSetHead from 'shared/GenericSetHead';

const GalleryPage: NextPage = () => {
  // const [loadInWebGallery, setLoadInWebGallery] =
  //   useState<JsonGalleryDataType>();
  // useEffect(() => {
  //   const importedGallery = Utils.importAllFilesFromDirectory(
  //     require.context(
  //       // This path has to be hardcoded to be imported by webpack
  //       '../../public/assets/mocks/gallery/',
  //       true,
  //       /\.(png|jpe?g|svg)$/
  //     )
  //   );
  //   setLoadInWebGallery(importedGallery);
  // }, []);
  console.log('maintenance');
  return (
    <>
      <GenericSetHead
        title='Gallery, AECS Narora'
        metadata={[
          {
            property: 'description',
            content:
              'This is the gallery page of Atomic Energy Central School, Narora Website which contains images from verious events held at AECS Narora.',
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
      {/* <div className='p-4 md:px-10 md:py-14'>
        <div className='text-2xl text-center md:text-4xl'>Gallery</div>
        {loadInWebGallery && (
          <GalleryByJsonFile jsonObject={loadInWebGallery} />
        )}
        <ListingByJsonFile jsonObject={galleryData} />
      </div> */}
      Under Maintenance
    </>
  );
};

export default React.memo(GalleryPage);
