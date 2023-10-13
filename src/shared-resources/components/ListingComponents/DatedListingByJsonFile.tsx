import React from 'react';
import { JsonDatedListDataType } from 'types/ListingJsonData.type';
import DatedListCard from './Cards/DatedListCard';

interface DatedListingByJsonFileProps {
  jsonObject: JsonDatedListDataType;
}

const DatedListingByJsonFile: React.FC<DatedListingByJsonFileProps> = (
  props
) => {
  const { jsonObject } = props;
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <div className='grid gap-5 mt-5 md:grid-cols-2 xl:grid-cols-3'>
            {jsonObject[categoryKey].map((item) => (
              <DatedListCard
                key={`${categoryKey}_${item.title}`}
                item={item}
                categoryKey={categoryKey}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(DatedListingByJsonFile);
