import React from 'react';
import { FaSpinner } from 'react-icons/fa';

interface Props {}

const LoadingPage: React.FC<Props> = () => (
  <div className='relative w-full h-screen bg-slate-900'>
    <FaSpinner className='absolute text-white top-1/2 left-1/2 animate-spin' />
  </div>
);

export default React.memo(LoadingPage);
