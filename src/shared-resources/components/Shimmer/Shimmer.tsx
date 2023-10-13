import React from 'react';

interface Props {
  className?: string;
}

const Shimmer: React.FC<Props> = ({ className }) => (
  <div className={`bg-brandGray2 overflow-hidden shadow-inner ${className}`}>
    <div className='animate-shimmerEffect duration-1000 h-full'>
      <div className='bg-gray-50 h-full w-3 shadow-2xl opacity-70 skew-x-12' />
    </div>
  </div>
);

export default React.memo(Shimmer);
