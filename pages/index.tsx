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
        title='Home, AECS Narora'
        metadata={[
          {
            property: 'description',
            content:
              'This is the home page of Atomic Energy Central School, Narora Website',
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
      <div className='p-4 md:p-10'>
        <div className='flex flex-col space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row'>
          <div className='w-full lg:w-3/5'>
            <ImageSlideshow images={images} ambientMode animate />
          </div>
          <div className='flex flex-col w-full p-5 space-y-5 rounded-lg lg:w-2/5 shadow-nft bg-slate-200/40 dark:bg-slate-800/50'>
            <div className='text-lg font-bold tracking-wider text-center'>
              Notice Board
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
                className='text-right text-blue-600 dark:text-yellow-400 hover:underline'
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
