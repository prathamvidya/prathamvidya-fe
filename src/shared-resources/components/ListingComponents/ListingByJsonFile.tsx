import Link from 'next/link';
import React from 'react';
import { JsonListDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';

interface ListingByJsonFileProps {
  jsonObject: JsonListDataType;
}

const ListingByJsonFile: React.FC<ListingByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <div className='grid gap-5 mt-5 md:grid-cols-2 xl:grid-cols-3'>
            {jsonObject[categoryKey].map((item) => (
              <BrandCardWithShadow
                className='!flex-row !justify-start rounded-lg text-slate-900 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur !py-3 !px-4'
                key={`${categoryKey}_${item.title}`}
              >
                <div className='flex justify-between w-full'>
                  <span className='flex-grow-0 pr-5 overflow-hidden text-ellipsis whitespace-nowrap'>
                    {item.title}
                  </span>
                  <Link href={item.target} passHref>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                      role='link'
                      target='_blank'
                      tabIndex={0}
                      className='text-blue-600 dark:text-cyan-500 hover:underline'
                    >
                      View
                    </a>
                  </Link>
                </div>
              </BrandCardWithShadow>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ListingByJsonFile);
