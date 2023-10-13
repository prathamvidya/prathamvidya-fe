import React from 'react';
import Shimmer from './Shimmer';

interface Props {}

const MarketspaceShimmer: React.FC<Props> = () => (
  <div className='w-full md:w-[22rem] lg:w-[28rem] 2xl:w-[34rem]'>
    <div className='relative h-36 xs:h-52 md:h-56'>
      <Shimmer className='object-cover w-full rounded-15 h-36 xs:h-52 md:h-56' />
      <Shimmer className='absolute p-1 rounded-full w-9 h-9 right-5 -bottom-2 md:right-8' />
    </div>
    <div className='max-w-full px-2 pt-6 md:pt-4 lg:pt-2'>
      <Shimmer className='h-3 md:h-5 rounded-5' />
      <Shimmer className='h-4 mt-1 md:h-7 rounded-5' />
    </div>
  </div>
);

export default React.memo(MarketspaceShimmer);
