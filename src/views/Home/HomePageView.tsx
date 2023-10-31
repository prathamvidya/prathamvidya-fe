import {
  FilledLinkToMediaField,
  FilledLinkToWebField,
} from '@prismicio/client';
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import ImageSlideshowTwoCols from 'shared-resources/components/Images/ImageSlideshowTwoCols';
import DatedListCard from 'shared-resources/components/ListingComponents/Cards/DatedListCard';
import DatedListCardWithImage from 'shared-resources/components/ListingComponents/Cards/DatedListCardWithImage';
import SocialHandleSection from 'shared-resources/components/SocialHandleSection';

interface HomePageProps {}

const HomePageView: React.FC<HomePageProps> = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  const director = prismicDataState?.aboutUs.staff_details.find(
    (v) => v.is_director
  );

  return (
    <div className='px-3 py-6 md:px-5 md:py-10'>
      <div className='flex flex-col space-y-6 md:space-y-10'>
        {prismicDataState?.settings?.hero_info_banner &&
          prismicDataState?.settings?.hero_slideshow_images && (
            <div className=''>
              <ImageSlideshowTwoCols
                imagesLeft={[
                  (
                    prismicDataState.settings
                      .hero_info_banner as FilledLinkToMediaField
                  ).url?.toString(),
                ]}
                imagesRight={prismicDataState.settings.hero_slideshow_images.map(
                  (v) =>
                    (v?.image_link as FilledLinkToMediaField)?.url?.toString()
                )}
                animateRight
                aspectRatioClassnameLeft='aspect-[1640/924] !scale-100'
                aspectRatioClassnameRight='aspect-[1640/924]'
              />
            </div>
          )}

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Notice Board */}
          <div className='flex flex-col w-full p-5 space-y-5 border rounded-lg shadow-nft dark:shadow-nftDark dark:border-primaryLight/20 border-primaryDark/20 '>
            <div className='text-lg font-bold tracking-wider text-center'>
              <div>News / Events</div>
              <div className='text-sm'>(What&apos;s New!)</div>
            </div>
            <div className='flex flex-col px-2 space-y-5 overflow-auto max-h-80'>
              {prismicDataState?.notices &&
                prismicDataState.notices.slice(0, 5).map((item) => (
                  <DatedListCard
                    item={{
                      title: item.title?.toString()!,
                      date: item.date_time?.toString()!,
                      target: `/notices/${(item as any).uid}`,
                    }}
                    key={`${item}_${Math.random()}`}
                  />
                ))}
            </div>
            <Link href='/notices' passHref legacyBehavior>
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

          {/* External Links */}
          <div className='grid w-full grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-2 auto-rows-auto'>
            {prismicDataState?.settings.external_links &&
              prismicDataState.settings.external_links
                .slice(0, 10)
                .map((link) => (
                  <DatedListCardWithImage
                    parentClassName='h-20'
                    key={link.link_title?.toString()!}
                    item={{
                      title: link.link_title?.toString()!,
                      target: (
                        link.link_url as FilledLinkToWebField
                      ).url.toString(),
                      image_src: link.link_thumbnail.url!.toString(),
                    }}
                  />
                ))}
          </div>
        </div>

        <div className='flex flex-col gap-6 lg:flex-row lg:h-96'>
          {/* About Us */}
          <div className='flex flex-col lg:w-3/4 h-96 lg:h-auto p-5 space-y-5 rounded-lg shadow-nft dark:shadow-nftDark text-secondaryLight dark:text-secondaryDark bg-primaryDark/[15%] dark:bg-primaryLight/10'>
            <div className='text-lg font-bold tracking-wider text-center'>
              <div>About Us</div>
            </div>
            {prismicDataState?.aboutUs.our_mission && (
              <div className='w-full overflow-hidden text-ellipsis'>
                <PrismicRichText
                  field={prismicDataState?.aboutUs.our_mission}
                />
              </div>
            )}
            <Link href='/about' passHref legacyBehavior>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                role='link'
                tabIndex={0}
                className='text-right text-blue-600 dark:text-cyan-500 hover:underline'
              >
                ... View More
              </a>
            </Link>
          </div>

          {/* Director */}
          {director && (
            <div className='flex-shrink-0 h-full mx-auto rounded-lg w-fit lg:w-1/4 shadow-nft dark:shadow-nftDark'>
              <div className='flex flex-col h-full p-6 rounded-lg dark:bg-secondaryDark bg-secondaryLight/95 text-primaryLight dark:text-primaryDark backdrop-blur shadow-nft'>
                <div className='relative w-full max-w-xs mx-auto !aspect-square max-h-80'>
                  <Image
                    src={director?.picture.url?.toString()!}
                    alt='Director'
                    layout='fill'
                    className='object-cover object-center rounded-lg aspect-square'
                  />
                </div>
                <div className='mt-2 text-base italic font-bold text-center md:mt-6 md:text-xl'>
                  {director?.name}
                </div>
                <div className='text-sm text-center md:text-base'>
                  {director?.designation}
                </div>
              </div>
            </div>
          )}
        </div>

        <SocialHandleSection />
      </div>
    </div>
  );
};

export default React.memo(HomePageView);
