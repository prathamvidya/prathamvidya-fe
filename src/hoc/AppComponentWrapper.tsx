import React from 'react';
import Footer from 'shared-resources/components/Footer';
import NavBar from 'shared-resources/components/NavBar';

interface AppComponentWrapperProps {
  children: any;
}

const AppComponentWrapper: React.FC<AppComponentWrapperProps> = ({
  children,
}) => (
  <div className='w-full px-2 py-1 sm:px-8 lg:px-8 max-w-[1920px] mx-auto relative'>
    <NavBar />
    {children}
    <Footer />
  </div>
);

export default AppComponentWrapper;
