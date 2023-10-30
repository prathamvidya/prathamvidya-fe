import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataSelector } from 'redux/selectors/ui.selectors';
import ParagraphByPrismicText from 'shared-resources/components/ListingComponents/ParagraphByPrismicText';

interface OurMissionProps {}

const OurMissionView: React.FC<OurMissionProps> = () => {
  const prismicDataState = useSelector(prismicDataSelector);

  return (
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>About Us</div>
      {prismicDataState?.aboutUs.our_mission && (
        <ParagraphByPrismicText
          jsonObject={{
            'Our Mission': prismicDataState?.aboutUs.our_mission!,
          }}
        />
      )}
    </div>
  );
};

export default React.memo(OurMissionView);
