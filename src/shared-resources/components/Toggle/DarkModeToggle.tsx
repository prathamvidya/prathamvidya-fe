import { Switch } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';
import { BsSun } from 'react-icons/bs';
import { MdModeNight } from 'react-icons/md';

export interface ToggleProps {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  disabled?: boolean;
}

const DarkModeToggle: React.FC<ToggleProps> = (props) => {
  const { enabled, setEnabled, disabled } = props;

  return (
    <Switch
      checked={enabled}
      disabled={disabled}
      onChange={setEnabled}
      className={classNames(
        disabled && 'pointer-events-none opacity-50',
        enabled ? 'bg-slate-300' : 'bg-slate-700',
        'relative inline-flex items-center flex-shrink-0 border-2 bg-opacity-75 backdrop-blur w-9 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75'
      )}
    >
      <span
        aria-hidden='true'
        className={`${
          enabled
            ? 'translate-x-[0.7rem] bg-slate-900'
            : 'translate-x-0 bg-slate-100'
        }
            pointer-events-none w-5 h-5 rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 flex items-center`}
      >
        {enabled ? (
          <MdModeNight className='w-3 mx-auto text-slate-100' />
        ) : (
          <BsSun className='w-3 mx-auto text-slate-900' />
        )}
      </span>
    </Switch>
  );
};

export default DarkModeToggle;
