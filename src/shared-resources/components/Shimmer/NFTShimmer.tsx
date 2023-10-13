import React from 'react';
import Shimmer from './Shimmer';

interface Props {}

const NFTShimmer: React.FC<Props> = () => (
  <div className='flex flex-col w-fit'>
    <div className='relative flex items-center justify-center mb-4'>
      <Shimmer className='rounded-full w-36 h-36 md:w-48 md:h-48' />
      <span className='absolute right-[calc(50%-1.375rem)] -bottom-[1rem]'>
        <Shimmer className='rounded-full w-11 h-11' />
      </span>
      <span className='absolute md:right-[1.6rem] right-[0.7rem] bottom-1'>
        <Shimmer className='rounded-full h-9 w-9' />
      </span>
    </div>
    <Shimmer className='mt-2.5 h-5 w-36 md:w-48 rounded-5' />
  </div>
);

export default React.memo(NFTShimmer);
