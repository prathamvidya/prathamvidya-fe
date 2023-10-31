import Image from 'next/image';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSettingsSelector } from 'redux/selectors/ui.selectors';

export interface Props {}
const Footer: React.FunctionComponent<Props> = () => {
  const prismicSettingsState = useSelector(prismicDataSettingsSelector);

  return (
    <>
      {/* Footer */}
      <footer className='flex flex-col items-center justify-between w-full px-4 pb-4 mt-24 border-t md:px-10 border-secondaryLight/20 dark:border-secondaryDark/20'>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-wrap items-center self-start justify-center'>
            {/* Logo */}
            <span className='flex-shrink-0 px-2 py-8 md:pl-4'>
              <div className='absolute dark:bg-[url("/assets/img/PrathamVidyaLogoDark.png")] bg-[url("/assets/img/PrathamVidyaLogo.png")] flex items-center justify-center bg-cover blur-2xl opacity-75 h-[4rem] w-[4rem]' />
              <Image
                src='/assets/img/PrathamVidyaLogoDark.png'
                alt=''
                height={64}
                width={64}
                className='relative top-0 left-0 hidden dark:inline-block'
                unoptimized
              />
              <Image
                src='/assets/img/PrathamVidyaLogo.png'
                alt=''
                height={64}
                width={64}
                className='relative top-0 left-0 inline-block dark:hidden'
                unoptimized
              />
            </span>
            {/* Heading */}
            <div className='hidden text-xs tracking-widest transition duration-500 md:block text-secondaryLight dark:text-secondaryDark'>
              <div className='font-bold uppercase'>
                {prismicSettingsState?.site_title}
              </div>
              <div className='text-[0.6rem] text-center sm:text-right uppercase'>
                {prismicSettingsState?.place}
              </div>
            </div>
          </div>
          <div className='py-6 text-right'>
            <div className='text-lg md:text-xl'>CONTACT US</div>
            <div className='text-xl font-bold md:text-2xl lg:text-3xl'>
              {prismicSettingsState?.phone_number}
            </div>
            <a
              href={`mailto:${prismicSettingsState?.email}`}
              target='_blank'
              referrerPolicy='no-referrer'
              rel='noreferrer'
              className='block text-blue-600 md:text-xl dark:text-cyan-500 hover:underline'
            >
              {prismicSettingsState?.email}
            </a>

            <div className='mt-2 text-sm'>
              Address:{' '}
              <a
                href={prismicSettingsState?.address[0]?.maps_link?.toString()}
                className='text-blue-600 dark:text-cyan-500 hover:underline'
                target='_blank'
                referrerPolicy='no-referrer'
                rel='noreferrer'
              >
                {prismicSettingsState?.address[0]?.line_1},
                <br />
                {prismicSettingsState?.address[0]?.line_2}, <br />
                {prismicSettingsState?.address[0]?.line_3}
              </a>
            </div>
          </div>
        </div>
        <div className='px-5 py-3 my-4 text-sm text-center rounded-md bg-primaryDark/20 dark:bg-primaryLight/10 backdrop-blur'>
          Copyright © {new Date().getFullYear()} Pratham Vidya. All rights
          reserved.
        </div>
        <div className='self-end text-xs font-bold text-center dark:font-normal'>
          Website designed by{' '}
          <a
            href='https://www.linkedin.com/in/shubhamsaxena924'
            className='text-blue-600 dark:text-cyan-500 hover:underline'
            target='_blank'
            referrerPolicy='no-referrer'
            rel='noreferrer'
          >
            Shubham Saxena
          </a>
        </div>
      </footer>
    </>
  );
};

export default React.memo(Footer);
