import React, { useMemo, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { JsonGalleryDataType } from 'types/ListingJsonData.type';
import ImageSlideshow from '../Images/ImageSlideshow';
import Modal from '../Modal/Modal';

interface GalleryByJsonFileProps {
  jsonObject: JsonGalleryDataType;
}

const GalleryByJsonFile: React.FC<GalleryByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  const [selectedFile, setSelectedFile] = useState<{
    category: string;
    categoryTitle: string;
    imageIndex: number;
    totalImagesInCategory: number;
  }>();

  const galleryHTML = useMemo(
    () =>
      jsonObject &&
      Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <section className=''>
            <div className='container px-0 py-5 mx-auto md:px-6 md:py-6 xl:px-10 xl:py-10'>
              <div className='flex flex-wrap -m-1 md:-m-2'>
                {/* Divide in group of 3 */}
                {Array(Math.ceil(jsonObject[categoryKey].length / 3))
                  .fill(null)
                  .map((v, index) => (
                    <div
                      key={`${categoryKey}_${Math.random()}`}
                      className='flex flex-wrap w-full sm:w-1/2 lg:w-1/3 '
                    >
                      {jsonObject[categoryKey]
                        .slice(3 * index, 3 * index + 3)
                        .map((image, image_index) => (
                          <div
                            role='button'
                            tabIndex={0}
                            key={image}
                            className={`${(() => {
                              if (index % 2 === 0) {
                                if (image_index % 3 === 2) return 'w-full';
                                return 'w-1/2';
                              }
                              if (image_index % 3 === 0) return 'w-full';
                              return 'w-1/2';
                            })()} p-2`}
                            onClick={() => {
                              setSelectedFile({
                                category: categoryKey,
                                categoryTitle: categoryKey,
                                imageIndex: 3 * index + image_index,
                                totalImagesInCategory:
                                  jsonObject[categoryKey].length,
                              });
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                setSelectedFile({
                                  category: categoryKey,
                                  categoryTitle: categoryKey,
                                  imageIndex: 3 * index + image_index,
                                  totalImagesInCategory:
                                    jsonObject[categoryKey].length,
                                });
                              }
                            }}
                          >
                            <ImageSlideshow
                              images={[image]}
                              ambientMode
                              ambienceClassName='blur-xl opacity-75 dark:blur-lg dark:opacity-50'
                              aspectRatioClassname='h-full'
                              imageProps={{
                                quality: '45',
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      )),
    [jsonObject]
  );

  return (
    <>
      <div className='flex flex-col mt-6 space-y-8'>{galleryHTML}</div>

      {/* Modal of gallery */}
      <Modal
        visible={!!selectedFile}
        handleVisibility={(value: boolean) => {
          if (!value) setSelectedFile(undefined);
        }}
        closeOnOutsideClick
        className='fixed inset-0 backdrop-blur-2xl bg-slate-400/40 dark:bg-slate-700/50'
        showCloseButton
        overlay={false}
      >
        {/* Image */}
        <div className='flex items-center justify-center h-screen'>
          {selectedFile && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={
                jsonObject[selectedFile?.category!][selectedFile?.imageIndex!]
              }
              alt=''
              className='max-w-[75vw] max-h-[60vh] rounded-[.625rem]'
            />
          )}
        </div>

        {/* Controls */}
        {selectedFile && (
          <>
            <div className='absolute text-5xl -translate-x-full left-1/2 bottom-36 sm:bottom-auto sm:translate-x-0 sm:-translate-y-1/2 sm:left-6 sm:top-1/2 '>
              <button
                onClick={() => {
                  setSelectedFile((v) =>
                    v
                      ? {
                          ...v,
                          imageIndex:
                            v.imageIndex > 0
                              ? v.imageIndex - 1
                              : v.totalImagesInCategory - v.imageIndex - 1,
                        }
                      : undefined
                  );
                }}
                className='transition-colors duration-300 rounded-md dark:hover:bg-slate-100 hover:bg-opacity-10 hover:bg-slate-900 dark:hover:bg-opacity-10'
              >
                <MdNavigateBefore />
              </button>
            </div>
            <div className='absolute text-5xl left-1/2 bottom-36 sm:left-auto sm:bottom-auto sm:-translate-y-1/2 sm:right-6 sm:top-1/2'>
              <button
                onClick={() =>
                  setSelectedFile((v) =>
                    v
                      ? {
                          ...v,
                          imageIndex:
                            (v.imageIndex + 1) % v.totalImagesInCategory,
                        }
                      : undefined
                  )
                }
                className='transition-colors duration-300 rounded-md dark:hover:bg-slate-100 hover:bg-opacity-10 hover:bg-slate-900 dark:hover:bg-opacity-10'
              >
                <MdNavigateNext />
              </button>
            </div>
            <div className='absolute flex-col items-center justify-center px-8 py-3 text-lg text-center -translate-x-1/2 bg-opacity-50 rounded-lg shadow-lg dark:bg-opacity-40 bg-slate-200 dark:bg-slate-900 bottom-10 left-1/2'>
              <div className='font-bold'>{selectedFile.categoryTitle}</div>
              <div className='tracking-wider'>
                - {selectedFile.imageIndex + 1}/
                {selectedFile.totalImagesInCategory} -
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default React.memo(GalleryByJsonFile);
