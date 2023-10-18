import useWindowSize from 'hooks/useWindowSize';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import store from 'redux/store';
import Dropdown from './Dropdown/Dropdown';
import DarkModeToggle from './Toggle/DarkModeToggle';

export interface Props {}

export interface NavLinkItem {
  label: string;
  value: string;
  routePath: string;
  class?: string;
}

const NavBar: React.FunctionComponent<Props> = () => {
  const { isScreenMdPlus } = useWindowSize();

  // Required for theme
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navbarRef = useRef<HTMLDivElement>(null);
  const [totalAvailableWidth, setTotalAvailableWidth] = useState<number>();
  const [isNavbarSticky, setIsNavbarSticky] = useState<boolean>(false);

  const router = useRouter();
  const [selected, setSelected] = useState<string>(router.pathname);

  useEffect(() => {
    if (selected !== router.pathname) {
      setSelected(router.pathname);
    }
  }, [router.pathname, selected]);

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
          url: '/about/principal',
          text: "Director's Note",
        },
        {
          url: '_blank/citizen',
          text: 'Citizen Charter',
        },
        {
          url: '_blank/rti',
          text: 'RTI',
        },
      ],
    },
    {
      url: '/schemes',
      text: 'Schemes',
    },
    {
      url: '/apply-process',
      text: 'Apply',
    },
    {
      text: 'Payments',
      subMenus: [
        {
          url: 'payments/donate',
          text: 'Contribute',
        },
        {
          url: '/payments/exam-fees',
          text: 'Exam Fees',
        },
      ],
    },
    {
      url: '/vacancies',
      text: 'Vacancies',
    },
    {
      url: '/notices',
      text: 'Notices',
    },
    {
      url: '/gallery',
      text: 'Gallery',
    },
  ];

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

  const widthOfOneLink = 136;
  const numberOfLinksToShow =
    (totalAvailableWidth || widthOfOneLink) / widthOfOneLink - 2;
  const showButton: boolean = numberOfLinksToShow < navLinks.length;

  const slicedLinks = useCallback(
    (start: number, end: number, multiLevelDropdown?: boolean) =>
      navLinks.slice(start, end).map((link) =>
        link.url ? (
          <Link key={link.url} href={link.url}>
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
              className={`w-[8.5rem] flex-shrink-0 cursor-pointer my-1 `}
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
            DropdownButton={
              <div
                className={`flex items-center ${
                  isNavbarSticky && !multiLevelDropdown
                    ? 'text-primaryLight dark:text-primaryDark'
                    : `text-secondaryLight dark:text-secondaryDark`
                }`}
              >
                <span
                  className={`duration-500 bg-transparent font-bold dark:font-normal px-1 truncate w-full inline-block text-xs tracking-widest transition-all uppercase whitespace-nowrap first-letter:text-base text-opacity-100 `}
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
              <Link key={submenu.url} href={submenu.url}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  role='link'
                  tabIndex={0}
                  onClick={() => {
                    setSelected(submenu.url);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && setSelected) {
                      setSelected(submenu.url);
                    }
                  }}
                  className={`w-[8.5rem] flex-shrink-0 cursor-pointer my-1 `}
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

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* Header */}
      <header className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          {/* Logo */}
          <span className='flex-shrink-0 px-4 py-8 md:px-10'>
            <div className='absolute bg-[url("/assets/img/PrathamVidyaLogo.png")] flex items-center justify-center bg-cover blur-2xl opacity-75 h-[3rem] w-[3rem] md:h-[6.25rem] md:w-[6.25rem] ' />
            <Image
              src='/assets/img/PrathamVidyaLogo.png'
              alt=''
              height={isScreenMdPlus ? 100 : 48}
              width={isScreenMdPlus ? 100 : 48}
              className='absolute top-0 left-0'
              unoptimized
            />
          </span>
          {/* Heading */}
          <div className='py-1 pl-6 text-base transition duration-500 border-l text-secondaryLight border-secondaryLight dark:text-secondaryDark dark:border-secondaryDark md:py-3 border-opacity-20 md:text-2xl'>
            <div className='font-bold tracking-wide'>Pratham Vidya</div>
            <div className='text-xs md:text-base'>
              Unlocking Bright Future Of India
            </div>
          </div>
        </div>
        {/* Toggle Dark mode */}
        <div className='absolute top-10 md:top-8 right-10 sm:right-14 md:right-20'>
          <DarkModeToggle
            setEnabled={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            enabled={theme === 'dark'}
          />
        </div>
      </header>

      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 rounded-md transition-[background-color] duration-500 ${
          isNavbarSticky
            ? 'bg-secondaryLight dark:bg-secondaryDark shadow-nft dark:shadow-nftDark text-primaryLight dark:text-primaryDark'
            : 'bg-primaryDark/[15%] dark:bg-primaryLight/10'
        }`}
      >
        <div
          ref={navbarRef}
          className='flex items-center justify-around px-5 py-4 space-x-2 text-center rounded-full'
        >
          {slicedLinks(0, numberOfLinksToShow)}
          {/* Dropdown Button */}
          {showButton && (
            <Dropdown
              DropdownButton={
                <div className='w-[7rem] text-center'>
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

export default store.withRedux(React.memo(NavBar));
