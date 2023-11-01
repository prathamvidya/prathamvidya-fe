import Image from 'next/image';
import React from 'react';

interface SocialHandleSectionProps {
  suppressHydrationWarning: boolean;
}

const SocialHandleSection: React.FC<SocialHandleSectionProps> = () => (
  <>
    <div className='!mt-12 md:!mt-20 text-center'>
      <span className='text-lg capitalize md:text-2xl'>
        Our Social Media Handles
      </span>
    </div>
    <div className='flex flex-wrap justify-center gap-8 mx-auto w-fit'>
      {/* Facebook */}
      <div className='relative h-full overflow-hidden transition-all duration-500 hover:scale-105 rounded-xl ring-1 ring-secondaryLight dark:ring-secondaryDark hover:shadow-nftHover hover:dark:shadow-nftDarkHover shadow-nft dark:shadow-nftDark w-fit '>
        <div className='flex items-center gap-2 p-2 font-extrabold'>
          <Image
            alt='Facebook Logo'
            src='/assets/img/FacebookLogo.png'
            className='rounded-lg'
            width='25'
            height='25'
          />
          <div>Facebook</div>
        </div>
        <div className='overflow-hidden border-t rounded-xl border-secondaryLight/20'>
          <iframe
            title='Pratham Vidya NGO'
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61552557579549&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
            width='340'
            height='500'
            style={{
              overflow: 'hidden',
              border: 'none',
            }}
            allowFullScreen
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
          />
        </div>
      </div>

      {/* Instagram */}
      <div className='h-full overflow-hidden transition-all duration-500 hover:scale-105 w-fit rounded-xl ring-1 ring-secondaryLight hover:shadow-nftHover hover:dark:shadow-nftDarkHover dark:ring-secondaryDark shadow-nft dark:shadow-nftDark'>
        <div className='flex items-center gap-2 p-2 font-extrabold'>
          <Image
            alt='Instagram Logo'
            src='/assets/img/InstagramLogo.png'
            className='rounded-lg'
            width='25'
            height='25'
          />
          <div>Instagram</div>
        </div>
        <div className='overflow-hidden border-t rounded-xl border-secondaryLight/20'>
          <iframe
            title='Instagram Post'
            src='https://www.instagram.com/p/Cy0CQsYxKFR/embed'
            width='340'
            height='500'
            frameBorder='0'
            scrolling='no'
            // eslint-disable-next-line react/no-unknown-property
            allowTransparency
          />
        </div>
      </div>

      {/* Twitter */}
      <div className='h-full overflow-hidden transition-all duration-500 hover:scale-105 rounded-xl ring-1 ring-secondaryLight hover:shadow-nftHover hover:dark:shadow-nftDarkHover dark:ring-secondaryDark shadow-nft dark:shadow-nftDark w-fit'>
        <div className='flex items-center gap-2 p-2 font-extrabold'>
          <Image
            alt='Twitter Logo'
            src='/assets/img/TwitterLogo.png'
            className='rounded-lg'
            width='25'
            height='25'
          />
          <div>Twitter</div>
        </div>
        <div className='overflow-hidden rounded-xl w-[340px] h-[500px]'>
          <a
            className='twitter-timeline'
            data-width='340'
            data-height='500'
            href='https://twitter.com/PrathamVidyaNgo?ref_src=twsrc%5Etfw'
          >
            Tweets by PrathamVidyaNgo
          </a>
          <script
            async
            src='https://platform.twitter.com/widgets.js'
            charSet='utf-8'
          />
        </div>
      </div>
    </div>
  </>
);

export default React.memo(SocialHandleSection);
