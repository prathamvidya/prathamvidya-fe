import React from 'react';
import { JsonTableDataType } from 'types/ListingJsonData.type';
import BrandCardWithShadow from '../BrandCardWithShadow';

interface TableByJsonFileProps {
  jsonObject: JsonTableDataType;
}

const TableByJsonFile: React.FC<TableByJsonFileProps> = (props) => {
  const { jsonObject } = props;
  return (
    <div className='flex flex-col mt-6 space-y-8'>
      {Object.keys(jsonObject).map((categoryKey) => (
        <div key={categoryKey}>
          <span className='text-lg capitalize md:text-2xl'>{categoryKey}</span>
          <div className='my-5'>
            <BrandCardWithShadow
              // title={categoryTitle}
              className='rounded-lg w-full text-slate-900 dark:text-slate-100 shadow-nft bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur !p-4 font-normal tracking-wide text-[17px]'
            >
              <div className='flex flex-col'>
                <div className='overflow-x-auto'>
                  <div className='inline-block min-w-full align-middle'>
                    <div className='overflow-hidden shadow md:rounded-lg'>
                      <table className='min-w-full divide-y divide-slate-700/30 dark:divide-slate-100/30'>
                        <thead>
                          <tr>
                            {jsonObject[categoryKey].fields.map(
                              (col: string) => (
                                <th
                                  key={`${categoryKey}_${col}`}
                                  scope='col'
                                  className='py-3 pl-4 pr-3 text-xs font-bold tracking-wide text-left uppercase text-slate-600 dark:text-slate-400 sm:pl-6'
                                >
                                  {col}
                                </th>
                              )
                            )}
                          </tr>
                        </thead>
                        <tbody className='bg-transparent divide-y divide-slate-700/10 dark:divide-slate-100/10 '>
                          {jsonObject[categoryKey].data.map(
                            (record: string[], index) => (
                              <tr
                                key={`${jsonObject[categoryKey].fields[index]}_${record[0]}`}
                              >
                                {record.map((data: string) => (
                                  <td
                                    key={`${data}_${Math.random()}`}
                                    className='py-4 pl-4 pr-3 font-[500] text-slate-900 dark:text-slate-100 sm:pl-6'
                                  >
                                    {data}
                                  </td>
                                ))}
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </BrandCardWithShadow>
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(TableByJsonFile);
