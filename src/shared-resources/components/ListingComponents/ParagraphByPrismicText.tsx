import { PrismicRichText } from '@prismicio/react';
import React from 'react';
import { PrismicRickTextJsonType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';

interface ParagraphByJsonFileProps {
  jsonObject: PrismicRickTextJsonType;
}

const ParagraphByPrismicText: React.FC<ParagraphByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <div className='my-5'>
            <BrandCardWithShadow
              // title={categoryTitle}
              className='rounded-lg text-secondaryLight dark:text-secondaryDark shadow-nft bg-primaryDark/[15%] dark:bg-primaryLight/10 backdrop-blur !p-6 font-normal tracking-wide text-sm md:text-base'
            >
              <PrismicRichText field={jsonObject[categoryKey]} />
            </BrandCardWithShadow>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ParagraphByPrismicText);
