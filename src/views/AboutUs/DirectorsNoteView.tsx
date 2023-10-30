import React from 'react';
import { useSelector } from 'react-redux';
import { prismicDataAboutUsSelector } from 'redux/selectors/ui.selectors';
import MessageByPrismicText from 'shared-resources/components/ListingComponents/MessageByPrismicText';

interface DirectorsNoteProps {}

const DirectorsNoteView: React.FC<DirectorsNoteProps> = () => {
  const prismicDataState = useSelector(prismicDataAboutUsSelector);

  const director = prismicDataState?.staff_details.find((v) => v.is_director);
  return (
    <div className='p-4 md:px-10 md:py-14'>
      <div className='text-2xl text-center md:text-4xl'>
        Director&apos;s Note
      </div>
      <MessageByPrismicText
        jsonObject={{
          name: director?.name || 'Anonymous',
          designation: director?.designation || 'Director',
          avatar: director?.picture.url || '',
          message: prismicDataState?.directors_note!,
        }}
      />
    </div>
  );
};

export default React.memo(DirectorsNoteView);
