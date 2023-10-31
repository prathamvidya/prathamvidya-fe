import { FilledLinkToWebField } from '@prismicio/client';
import useWindowSize from 'hooks/useWindowSize';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import Dropdown from './Dropdown/Dropdown';
import DarkModeToggle from './Toggle/DarkModeToggle';

export interface NavLinkItem {
  label: string;
  value: string;
  routePath: string;
  class?: string;
}

const NavBar: React.FunctionComponent = () => {
  const { isScreenMdPlus } = useWindowSize();

  const prismicDataState = useSelector(prismicDataSelector);

  const prismicSettings = prismicDataState?.settings;

  const navLinks = [
    {
      url: '/',
      text: 'Home',
    },
    {
      text: 'About Us',
      subMenus: [
        {
          url: '/about',
          text: 'Our Mission',
        },
        {
          url: '/about/directors-note',
          text: "Director's Note",
        },
        {
          url:
            (prismicDataState?.aboutUs.citizen_charter as FilledLinkToWebField)
              ?.url || '',
          text: 'Citizen Charter',
          isExternal: true,
        },
        {
          url:
            (prismicDataState?.aboutUs.rti as FilledLinkToWebField)?.url || '',
          text: 'RTI',
          isExternal: true,
        },
      ],
    },
    {
      url: '/schemes',
      text: 'Schemes',
      isExternal: false,
    },
    {
      text: 'Apply',
      subMenus: [
        {
          url:
            (
              prismicSettings?.apply_now_kishore_form_link as FilledLinkToWebField
            )?.url || '',
          text: 'Kishor Scholarsh.',
          isExternal: true,
        },
        {
          url:
            (
              prismicSettings?.apply_now_tarun_scholarsh_form_link as FilledLinkToWebField
            )?.url || '',
          text: 'Tarun Scholarship',
          isExternal: true,
        },
      ],
    },
    {
      text: 'Payments',
      subMenus: [
        {
          url:
            (prismicSettings?.contribution_payment_link as FilledLinkToWebField)
              ?.url || '',
          text: 'Contribute',
          isExternal: true,
        },
        {
          url:
            (prismicSettings?.exam_payment_link as FilledLinkToWebField)?.url ||
            '',
          text: 'Exam Fees',
          isExternal: true,
        },
      ],
    },
    // {
    //   url: '/vacancies',
    //   text: 'Vacancies',
    // },
    {
      url: '/notices',
      text: 'Notices',
    },
    {
      url: '/gallery',
      text: 'Gallery',
    },
  ];

  // Required for theme
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navbarRef = useRef<HTMLDivElement>(null);
  const [totalAvailableWidth, setTotalAvailableWidth] = useState<number>();
  const [isNavbarSticky, setIsNavbarSticky] = useState<boolean>(false);
  const [numberOfLinksToShow, setNumberOfLinksToShow] = useState<number>(
    navLinks.length
  );

  const router = useRouter();
  const [selected, setSelected] = useState<string>(router.pathname);

  useEffect(() => {
    if (selected !== router.pathname) {
      setSelected(router.pathname);
    }
  }, [router.pathname, selected]);

  useEffect(() => {
    setTotalAvailableWidth(navbarRef?.current?.offsetWidth);
    // Dependency of mounted is needed to rerender after the UI has been mounted to get width from it
  }, [mounted, navbarRef?.current?.offsetWidth]);

  useEffect(() => {
    const isSticky = () => {
      if (navbarRef?.current?.getBoundingClientRect?.()?.top === 0) {
        setIsNavbarSticky(true);
      } else {
        setIsNavbarSticky(false);
      }
    };
    window.addEventListener('scroll', isSticky);

    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, []);

  const widthOfOneLink = 160;
  useEffect(() => {
    setNumberOfLinksToShow(
      (totalAvailableWidth || widthOfOneLink) / widthOfOneLink - 1
    );
  }, [totalAvailableWidth, widthOfOneLink]);
  const showButton: boolean = numberOfLinksToShow < navLinks.length;

  const slicedLinks = useCallback(
    (start: number, end: number, multiLevelDropdown?: boolean) =>
      navLinks.slice(start, end).map((link) =>
        link.url ? (
          <Link key={link.url} href={link.url} legacyBehavior>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              role='link'
              tabIndex={0}
              onClick={() => {
                setSelected(link.url);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && setSelected) {
                  setSelected(link.url);
                }
              }}
              target={link.isExternal ? '_blank' : undefined}
              rel={link.isExternal ? 'noreferrer noopener' : undefined}
              className={`w-[10rem] flex-shrink-0 cursor-pointer my-1 `}
            >
              <span
                className={`duration-500 w-fit bg-transparent font-bold dark:font-normal px-1 inline-block text-xs tracking-widest transition-all ${
                  isNavbarSticky && !multiLevelDropdown
                    ? 'text-primaryLight dark:text-primaryDark'
                    : `text-secondaryLight dark:text-secondaryDark`
                } uppercase border-b whitespace-nowrap first-letter:text-base hover:border-secondaryLight dark:hover:border-secondaryDark hover:border-opacity-80  ${
                  selected === link.url
                    ? 'text-opacity-100 border-transparent'
                    : 'text-opacity-100 border-transparent'
                }`}
              >
                {selected === link.url && '*'}
                {link.text}
                {selected === link.url && '*'}
              </span>
            </a>
          </Link>
        ) : (
          <Dropdown
            key={link.subMenus?.toString()}
            DropdownButton={
              <div
                className={`flex justify-center w-[10rem] items-center ${
                  isNavbarSticky && !multiLevelDropdown
                    ? 'text-primaryLight dark:text-primaryDark'
                    : `text-secondaryLight dark:text-secondaryDark`
                }`}
              >
                <span
                  className={`duration-500 bg-transparent font-bold dark:font-normal px-1 truncate inline-block text-xs tracking-widest transition-all uppercase whitespace-nowrap first-letter:text-base text-opacity-100 `}
                >
                  {link.text}
                </span>
                <BsChevronDown
                  className='block ml-1 mb-0.5 text-xs'
                  aria-hidden='true'
                />
              </div>
            }
            multiLevel={multiLevelDropdown}
          >
            {link.subMenus?.map((submenu) => (
              <Link key={submenu.url} href={submenu.url} legacyBehavior>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  role='link'
                  tabIndex={0}
                  onClick={() => {
                    setSelected(submenu.url);
                  }}
                  target={submenu.isExternal ? '_blank' : undefined}
                  rel={submenu.isExternal ? 'noreferrer noopener' : undefined}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && setSelected) {
                      setSelected(submenu.url);
                    }
                  }}
                  className={`w-[10rem] flex-shrink-0 cursor-pointer my-1 `}
                >
                  <span
                    className={`duration-500 bg-transparent font-bold dark:font-normal px-1 w-fit inline-block text-xs tracking-widest transition-all text-secondaryLight dark:text-secondaryDark uppercase border-b whitespace-nowrap  first-letter:text-base hover:border-secondaryLight dark:hover:border-secondaryDark hover:border-opacity-80  ${
                      selected === submenu.url
                        ? 'text-opacity-100 border-transparent'
                        : 'text-opacity-100 border-transparent'
                    }`}
                  >
                    {selected === submenu.url && '*'}
                    {submenu.text}
                    {selected === submenu.url && '*'}
                  </span>
                </a>
              </Link>
            ))}
          </Dropdown>
        )
      ),
    [selected, totalAvailableWidth, isNavbarSticky]
  );

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!prismicDataState) {
    return null;
  }

  return (
    <>
      {/* Header */}
      <header className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          {/* Logo */}
          <span className='flex-shrink-0 py-8 pl-2 pr-4 md:pr-6'>
            <div className='absolute dark:bg-[url("/assets/img/PrathamVidyaLogoDark.png")] bg-[url("/assets/img/PrathamVidyaLogo.png")] flex items-center justify-center bg-cover blur-2xl opacity-75 h-[3rem] w-[3rem] md:h-[6.25rem] md:w-[6.25rem] ' />
            <Image
              src='/assets/img/PrathamVidyaLogoDark.png'
              alt='Pratham Vidya Logo'
              height={isScreenMdPlus ? 100 : 48}
              width={isScreenMdPlus ? 100 : 48}
              className='relative top-0 left-0 hidden dark:inline-block'
              unoptimized
            />
            <Image
              src='/assets/img/PrathamVidyaLogo.png'
              alt='Pratham Vidya Logo'
              height={isScreenMdPlus ? 100 : 48}
              width={isScreenMdPlus ? 100 : 48}
              className='relative top-0 left-0 inline-block dark:hidden'
              unoptimized
            />
          </span>
          {/* Heading */}
          <div className='flex-shrink-0 max-w-xs py-1 pl-4 text-base transition duration-500 border-l md:pl-6 text-secondaryLight border-secondaryLight dark:text-secondaryDark dark:border-secondaryDark md:py-3 border-opacity-20 md:text-2xl'>
            <div className='font-bold tracking-wide'>
              {prismicSettings?.site_title}
            </div>
            <div className='text-xs md:text-base'>
              {prismicSettings?.tagline}
            </div>
          </div>
        </div>
        <div className='hidden space-x-2 md:space-x-6 xs:flex'>
          <a
            href='https://www.g20.org/en/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              alt='Azadi Ka Amrit Mahotsava Logo'
              src='/assets/img/azadi-logo.png'
              width={100}
              height={100}
            />
          </a>
          <a
            href='https://amritmahotsav.nic.in/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Image
              alt='G20 Logo'
              src='/assets/img/g20-logo.png'
              width={100}
              height={100}
            />
          </a>
        </div>
        {/* Toggle Dark mode */}
        <div className='absolute top-5 right-3 sm:right-10'>
          {/* Adding check of totalAvailableWidth, since it is set in useEffect which means on Client side (To avoid Hyration Error due to theme) */}
          {totalAvailableWidth && (
            <DarkModeToggle
              setEnabled={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
              enabled={theme === 'dark'}
            />
          )}
        </div>
      </header>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-[background-color] duration-500 ${
          isNavbarSticky
            ? 'bg-secondaryLight dark:bg-secondaryDark shadow-nft dark:shadow-nftDark text-primaryLight dark:text-primaryDark rounded-b-md'
            : 'bg-primaryDark/[15%] dark:bg-primaryLight/10 rounded-md'
        }`}
      >
        <div
          ref={navbarRef}
          className='flex items-center justify-around px-5 py-4 space-x-2 text-center'
        >
          {slicedLinks(0, numberOfLinksToShow)}
          {/* Dropdown Button */}
          {showButton && (
            <Dropdown
              DropdownButton={
                <div className='w-[10rem] text-center'>
                  <AiOutlineMenu className='mx-auto -mb-1 text-center cursor-pointer' />
                </div>
              }
            >
              {slicedLinks(numberOfLinksToShow, navLinks.length, true)}
            </Dropdown>
          )}
        </div>
      </nav>
    </>
  );
};

export default React.memo(NavBar);
