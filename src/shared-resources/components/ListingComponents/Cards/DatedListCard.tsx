import Link from 'next/link';
import React from 'react';
import BrandCardWithShadow from 'shared-resources/components/BrandCardWithShadow';

interface DatedListCardProps {
  categoryKey?: string;
  item: {
    title: string;
    date: string;
    target: string;
  };
  singleLineTitle?: boolean;
}

const DatedListCard: React.FC<DatedListCardProps> = (props) => {
  const { categoryKey, item, singleLineTitle } = props;
  return (
    <BrandCardWithShadow className='!flex-row !justify-start rounded-lg text-slate-900 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 !p-4'>
      <div className='flex flex-col justify-between w-full space-y-4'>
        {categoryKey && (
          <div className='px-4 py-1 text-sm rounded-full w-fit text-slate-100 dark:text-slate-900 bg-slate-900 dark:bg-slate-100'>
            {categoryKey}
          </div>
        )}
        <span
          className={`flex-grow-0 overflow-hidden text-justify ${
            singleLineTitle ? 'text-ellipsis whitespace-nowrap' : ''
          } `}
        >
          {item.title}
        </span>
        <div className='flex items-center justify-between'>
          <div className='text-xs font-bold tracking-wider'>
            Dated: {item.date}
          </div>
          <Link href={item.target} passHref>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              role='link'
              target='_blank'
              tabIndex={0}
              className='text-blue-600 dark:text-yellow-400 hover:underline'
            >
              More...
            </a>
          </Link>
        </div>
      </div>
    </BrandCardWithShadow>
  );
};

export default React.memo(DatedListCard);
