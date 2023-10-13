import React from 'react';
import Shimmer from './Shimmer';

interface Props {}

const ObjectShimmer: React.FC<Props> = () => (
  <div>
    <div className='relative w-32 h-32 lg:w-40 lg:h-40 2xl:w-52 2xl:h-52'>
      <Shimmer className='w-full h-full rounded-10' />
      <Shimmer className='h-9 w-9 rounded-full absolute right-[.625rem] -translate-y-1/2' />
    </div>
    <Shimmer className='h-4 mt-6 md:mt-4 rounded-5 w-28 sm:w-32' />
  </div>
);

export default React.memo(ObjectShimmer);
