import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { JsonMessageDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';
import ImageSlideshow from '../ImageSlideshow';

interface MessageByJsonFileProps {
  jsonObject: JsonMessageDataType;
}

const MessageByJsonFile: React.FC<MessageByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='mt-24'>
      <div className='my-5'>
        <BrandCardWithShadow
          // title={categoryTitle}
          className='rounded-lg text-slate-900/80 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur sm:!px-14 sm:!py-10 font-normal tracking-wide text-sm md:text-[17px]'
        >
          <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-[50%] lg:w-[65%] xl:w-[75%] mt-8 md:mt-0'>
              {/* Quote */}
              <FaQuoteLeft className='text-xl md:text-3xl' />
              {/* Message in paragraphs */}
              <div className='italic font-light leading-relaxed tracking-wider text-justify lg:pl-6 md:mr-10 xl:mr-16'>
                {jsonObject.message.map((para) => (
                  <p className='my-6' key={Math.random()}>
                    {para}
                  </p>
                ))}
                {/* Footer */}
                <p className='italic font-bold'>{jsonObject.name}</p>
                <p className='italic'>Principal, AECS Narora</p>
              </div>
            </div>
            <div className='w-[75%] sm:w-[60%] md:w-[50%] lg:w-[35%] xl:w-[25%] p-2 sm:p-4 md:p-6 rounded-lg -mt-24 h-fit bg-slate-400/80 backdrop-blur dark:bg-slate-700/40 shadow-nft self-center md:self-start'>
              <ImageSlideshow
                ambientMode
                images={[jsonObject.avatar]}
                aspectRatioClassname='aspect-square md:aspect-[15/16] object-top scale-100'
              />
              <div className='hidden mt-2 text-base italic font-bold text-center md:block md:mt-6 md:text-xl'>
                {jsonObject.name}
              </div>
              <div className='hidden text-sm text-center md:block md:text-base'>
                Principal, AECS Narora
              </div>
            </div>
          </div>
        </BrandCardWithShadow>
      </div>
    </div>
  );
};

export default React.memo(MessageByJsonFile);
