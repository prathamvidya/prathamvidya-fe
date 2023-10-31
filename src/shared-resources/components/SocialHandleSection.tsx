import React from 'react';

interface SocialHandleSectionProps {}

const SocialHandleSection: React.FC<SocialHandleSectionProps> = () => (
  <>
    <div className='!mt-12 md:!mt-20 text-center'>
      <span className='text-lg capitalize md:text-2xl'>Our Social Handles</span>
    </div>
    <div className='flex flex-wrap gap-6'>
      {/* Facebook */}
      <div className='relative h-full overflow-hidden rounded-xl ring-1 ring-secondaryLight dark:ring-secondaryDark shadow-nft dark:shadow-nftDark w-fit'>
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

      {/* Instagram */}
      <div className='h-full overflow-hidden w-fit rounded-xl ring-1 ring-secondaryLight dark:ring-secondaryDark shadow-nft dark:shadow-nftDark'>
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

      {/* Twitter */}
      <div className='h-full overflow-hidden rounded-xl ring-1 ring-secondaryLight dark:ring-secondaryDark shadow-nft dark:shadow-nftDark w-fit'>
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
  </>
);

export default React.memo(SocialHandleSection);
