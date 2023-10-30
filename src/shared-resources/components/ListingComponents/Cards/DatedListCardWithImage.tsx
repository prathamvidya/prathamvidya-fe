import Image from 'next/image';
import React from 'react';
import BrandCardWithShadow from 'shared-resources/components/BrandCardWithShadow';

interface DatedListCardProps {
  categoryKey?: string;
  item: {
    image_src: string;
    title: string;
    date?: string;
    target: string;
  };
  singleLineTitle?: boolean;
  parentClassName?: string;
}

const DatedListCardWithImage: React.FC<DatedListCardProps> = (props) => {
  const { categoryKey, item, singleLineTitle, parentClassName } = props;
  return (
    <div className={parentClassName}>
      <a
        href={item.target}
        target='_blank'
        rel='noreferrer noopener'
        className='block w-full h-full'
      >
        <BrandCardWithShadow className='!flex-row w-full h-full !justify-start items-center rounded-lg text-secondaryLight dark:text-secondaryDark bg-primaryDark/[15%] dark:bg-primaryLight/10 dark:hover:bg-secondaryDark hover:bg-secondaryLight/95 hover:text-primaryLight hover:dark:text-primaryDark transition-colors duration-500 !p-2 lg:!p-4'>
          <div className='flex-shrink-0 mr-2 lg:mr-4'>
            <Image
              src={item.image_src}
              alt=''
              height={40}
              width={40}
              className='relative top-0 left-0 sm:hidden'
              unoptimized
            />
            <Image
              src={item.image_src}
              alt=''
              height={52}
              width={52}
              className='relative top-0 left-0 hidden sm:block lg:hidden'
              unoptimized
            />
            <Image
              src={item.image_src}
              alt=''
              height={64}
              width={64}
              className='relative top-0 left-0 hidden lg:block'
              unoptimized
            />
          </div>
          <div className='flex flex-col justify-between space-y-4'>
            {categoryKey && (
              <div className='px-4 py-1 text-sm rounded-full w-fit text-primaryLight dark:text-primaryDark bg-primaryDark dark:bg-primaryLight'>
                {categoryKey}
              </div>
            )}
            <div
              className={`flex-grow-0 text-xs sm:text-sm overflow-hidden text-justify ${
                singleLineTitle ? 'text-ellipsis whitespace-nowrap' : ''
              } `}
            >
              {item.title}
            </div>
            {item.date && (
              <div className='flex items-center justify-between'>
                <div className='text-xs font-bold tracking-wider'>
                  Dated: {new Date(item.date).toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </BrandCardWithShadow>
      </a>
    </div>
  );
};

export default React.memo(DatedListCardWithImage);
