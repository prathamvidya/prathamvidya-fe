import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import ImageSlideshow from 'shared-resources/components/ImageSlideshow';
import DatedListCard from 'shared-resources/components/ListingComponents/Cards/DatedListCard';
import GenericSetHead from 'shared/GenericSetHead';
import {
  JsonAnnouncementDataType,
  JsonNoticesDataType,
} from 'types/ListingJsonData.type';
import images from '../public/assets/mocks/home/home_slideshow.json';
import noticesData from '../public/assets/mocks/notices/notices.json';

const Home: NextPage = () => {
  const [latestAnnouncements, setLatestAnnouncements] =
    useState<JsonAnnouncementDataType[]>();

  useEffect(() => {
    setLatestAnnouncements(
      Object.values(noticesData as JsonNoticesDataType)
        .flat()
        .sort((a, b) => {
          if (a.date < b.date) return 1;
          if (a.date === b.date) {
            if (a.title < b.title) {
              return -1;
            }
            return 1;
          }
          return -1;
        })
        .slice(0, 5)
    );
  }, []);
  return (
    <>
      <GenericSetHead
        title='Home, Pratham Vidya'
        metadata={[
          {
            property: 'description',
            content: 'Pratham Vidya: NGO Scholarship Program',
          },
          {
            property: 'robots',
            content: 'index, follow',
          },
          {
            property: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
        ]}
      />
      <div className='px-3 py-6 md:px-10 md:py-10'>
        <div className='flex flex-col space-y-6 md:space-y-10'>
          <div className='w-full'>
            <ImageSlideshow
              images={images}
              animate
              aspectRatioClassname='aspect-[16/5]'
            />
          </div>
          <div className='flex flex-col w-full p-5 space-y-5 border rounded-lg shadow-nft dark:shadow-nftDark lg:w-2/5 dark:border-primaryLight/20 border-primaryDark/20 '>
            <div className='text-lg font-bold tracking-wider text-center'>
              <div>News / Events</div>
              <div className='text-sm'>(What&apos;s New!)</div>
            </div>
            {latestAnnouncements &&
              latestAnnouncements.map((item) => (
                <DatedListCard
                  item={{ ...item, target: `/notices/${item.id}` }}
                  key={`${item}_${Math.random()}`}
                />
              ))}
            <Link href='/notices' passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                role='link'
                tabIndex={0}
                className='text-right text-blue-600 dark:text-cyan-500 hover:underline'
              >
                View All
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
