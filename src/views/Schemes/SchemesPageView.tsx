import { FilledLinkToWebField } from '@prismicio/client';
import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import DatedListCardWithImage from 'shared-resources/components/ListingComponents/Cards/DatedListCardWithImage';

interface SchemesPageViewProps {}

const SchemesPageView: React.FC<SchemesPageViewProps> = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  return (
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>Schemes</div>
      <div className='grid w-full grid-cols-2 gap-2 mt-10 sm:gap-6 lg:grid-cols-3 auto-rows-auto'>
        {prismicDataState?.settings.external_links &&
          prismicDataState.settings.external_links.map((link) => (
            <DatedListCardWithImage
              parentClassName='h-20'
              key={link.link_title?.toString()!}
              item={{
                title: link.link_title?.toString()!,
                target: (link.link_url as FilledLinkToWebField).url.toString(),
                image_src: link.link_thumbnail.url!.toString(),
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default React.memo(SchemesPageView);
