import { NextPage } from 'next';
import React, { useState } from 'react';
import { BsTable } from 'react-icons/bs';
import { FaThList } from 'react-icons/fa';
import StaffGalleryByJsonFile from 'shared-resources/components/ListingComponents/StaffGalleryByJsonFile';
import TableByJsonFile from 'shared-resources/components/ListingComponents/TableByJsonFile';
import GenericSetHead from 'shared/GenericSetHead';
import staffData from '../../public/assets/mocks/about/staff/staff.json';

const StaffPage: NextPage = () => {
  const [tabularFormat, setTabularFormat] = useState<boolean>(false);
  return (
    <>
      <GenericSetHead
        title='Staff, AECS Narora'
        metadata={[
          {
            property: 'description',
            content:
              'This is the list of staff members of Atomic Energy Central School, Narora.',
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

      <div className='p-4 md:px-10 md:py-14'>
        <div className='text-2xl text-center md:text-4xl'>Staff</div>
        {/* Toggle for table view */}
        <div className='flex items-center justify-end space-x-1'>
          <div className='mr-2'>View</div>
          <BsTable
            className={`p-2 text-3xl rounded ${
              tabularFormat ? 'bg-slate-400/40 dark:bg-slate-500/50' : ''
            }`}
            onClick={() => {
              setTabularFormat(true);
            }}
          />
          <FaThList
            className={`p-2 text-3xl rounded ${
              !tabularFormat ? 'bg-slate-400/40 dark:bg-slate-500/50' : ''
            }`}
            onClick={() => {
              setTabularFormat(false);
            }}
          />
        </div>
        {tabularFormat ? (
          <TableByJsonFile
            jsonObject={{
              '': {
                fields: ['Sr No.', 'Name', 'Designation', 'Subject'],
                data: Object.values(staffData)
                  .flat()
                  .map((item, index) => [
                    `${index + 1}`,
                    item.name,
                    item.designation,
                    item.subject,
                  ]),
              },
            }}
          />
        ) : (
          <StaffGalleryByJsonFile jsonObject={staffData} />
        )}
      </div>
    </>
  );
};

export default React.memo(StaffPage);
