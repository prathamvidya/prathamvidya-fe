import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';

interface Props {
  children: React.ReactNode;
  buttonclassName?: string;
  PopOverButton: React.ReactNode;
  onClick?: any;
}
const PopOver: React.FC<Props> = (props) => {
  const { buttonclassName, children, PopOverButton, onClick } = props;
  return (
    <Popover className='relative h-full'>
      {() => (
        <>
          <Popover.Button
            onClick={() => {
              if (onClick) {
                onClick();
              }
            }}
            onKeyDown={(e: any) => {
              if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                onClick();
              }
            }}
            className={`rounded-full focus:outline-none ${buttonclassName}`}
          >
            {PopOverButton}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel className='absolute right-0 z-10 mt-2 transform bg-white rounded-lg ring-black ring-1 ring-opacity-5 shadow-popover'>
              {children}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default React.memo(PopOver);
