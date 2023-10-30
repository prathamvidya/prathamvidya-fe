import { useTheme } from 'next-themes';
import React from 'react';
import { JsonStaffDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';
import ImageSlideshow from '../Images/ImageSlideshow';

interface StaffGalleryByJsonFileProps {
  jsonObject: JsonStaffDataType;
}

const StaffGalleryByJsonFile: React.FC<StaffGalleryByJsonFileProps> = (
  props
) => {
  const { jsonObject } = props;
  const { theme } = useTheme();
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <div className='flex flex-wrap justify-center gap-5 mt-5 sm:justify-start'>
            {jsonObject[categoryKey].map((member) => (
              <BrandCardWithShadow
                className='w-[12rem] lg:w-[14rem] xl:w-[16rem] rounded-lg text-slate-900 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur !py-3 !px-4'
                key={`${categoryKey}_${member.name}`}
              >
                <div className='flex flex-col justify-between w-full h-full'>
                  <ImageSlideshow
                    ambientMode
                    images={[member.avatar]}
                    aspectRatioClassname='aspect-square md:aspect-[15/16] object-top scale-100'
                    fallbackImage={
                      theme === 'dark'
                        ? '/assets/mocks/about/staff/defaultUserLight.png'
                        : '/assets/mocks/about/staff/defaultUserDark.png'
                    }
                  />
                  <div>
                    <div className='mt-2 text-sm italic font-bold text-center md:mt-6 md:text-base'>
                      {member.name}
                    </div>
                    <div className='text-sm text-center md:text-base'>
                      {member.designation}
                    </div>
                    {member.subject && (
                      <div className='text-xs text-center md:text-sm'>
                        [{member.subject}]
                      </div>
                    )}
                  </div>
                </div>
              </BrandCardWithShadow>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(StaffGalleryByJsonFile);
