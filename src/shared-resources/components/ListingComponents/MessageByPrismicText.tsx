import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { PrismicDirectorNoteJsonDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';
import ImageSlideshow from '../Images/ImageSlideshow';

interface MessageByJsonFileProps {
  jsonObject: PrismicDirectorNoteJsonDataType;
}

const MessageByPrismicText: React.FC<MessageByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='mt-24'>
      <div className='my-5'>
        <BrandCardWithShadow
          // title={categoryTitle}
          className='rounded-lg text-secondaryLight/80 dark:text-secondaryDark shadow-nft dark:shadow-nftDark bg-primaryDark/[15%] dark:bg-primaryLight/10 sm:!px-14 sm:!py-10 font-normal tracking-wide text-sm md:text-[17px]'
        >
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-[50%] lg:w-[65%] xl:w-[75%] mt-8 md:mt-0'>
              {/* Quote */}
              <FaQuoteLeft className='text-xl md:text-3xl' />
              {/* Message in paragraphs */}
              <div className='italic font-light leading-relaxed tracking-wider text-justify lg:pl-6 md:mr-10 xl:mr-16'>
                <PrismicRichText field={jsonObject.message} />
              </div>
            </div>
            <div className='w-[75%] sm:w-[60%] md:w-[50%] lg:w-[35%] xl:w-[25%] p-2 sm:p-4 md:p-6 rounded-lg -mt-24 h-fit dark:bg-secondaryDark bg-secondaryLight/95 text-primaryLight dark:text-primaryDark backdrop-blur shadow-nft self-center md:self-start'>
              <ImageSlideshow
                images={[jsonObject.avatar]}
                aspectRatioClassname='aspect-square md:aspect-[15/16] object-top scale-100'
              />
              <div className='hidden mt-2 text-base italic font-bold text-center md:block md:mt-6 md:text-xl'>
                {jsonObject.name}
              </div>
              <div className='hidden text-sm text-center md:block md:text-base'>
                {jsonObject.designation}
              </div>
            </div>
          </div>
        </BrandCardWithShadow>
      </div>
    </div>
  );
};

export default React.memo(MessageByPrismicText);
