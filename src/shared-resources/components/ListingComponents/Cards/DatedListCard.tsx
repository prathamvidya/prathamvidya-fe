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
    <BrandCardWithShadow
      className='!flex-row !justify-start rounded-lg text-secondaryLight dark:text-secondaryDark bg-primaryLight dark:bg-primaryDark dark:hover:bg-primaryLight/5 hover:bg-primaryDark/5 transition-colors duration-500 border-primaryDark/20 dark:border-primaryLight/20 border !p-4'
      onClick={() => {
        window.open(item.target, '_blank');
      }}
    >
      <div className='flex flex-col justify-between w-full space-y-4'>
        {categoryKey && (
          <div className='px-4 py-1 text-sm rounded-full w-fit text-primaryLight dark:text-primaryDark bg-primaryDark dark:bg-primaryLight'>
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
              className='text-blue-600 dark:text-cyan-500 hover:underline'
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
