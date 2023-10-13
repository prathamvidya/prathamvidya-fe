import React from 'react';
import { JsonParagraphDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';

interface ParagraphByJsonFileProps {
  jsonObject: JsonParagraphDataType;
}

const ParagraphByJsonFile: React.FC<ParagraphByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <div className='my-5'>
            <BrandCardWithShadow
              // title={categoryTitle}
              className='rounded-lg text-slate-900 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur !p-6 font-normal tracking-wide text-[17px]'
            >
              {jsonObject[categoryKey].map((para) => (
                <p className='my-2' key={Math.random()}>
                  {para}
                </p>
              ))}
            </BrandCardWithShadow>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ParagraphByJsonFile);
