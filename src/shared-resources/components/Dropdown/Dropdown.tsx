import useEscapeKeyDetector from 'hooks/useEscapeKeyDetector';
import useOutsideClickDetector from 'hooks/useOutsideClickDetector';
import React, { useState } from 'react';

interface Props {
  children: React.ReactNode;
  DropdownButton: React.ReactNode;
  className?: string;
  multiLevel?: boolean;
}

const Dropdown: React.FC<Props> = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownWrapOne = useEscapeKeyDetector<HTMLDivElement>(() =>
    setDropdown(false)
  );
  const dropdownWrapTwo = useOutsideClickDetector<HTMLDivElement>(() =>
    setDropdown(false)
  );
  const { children, DropdownButton, className, multiLevel } = props;
  return (
    <div className='relative h-full'>
      <button onClick={() => setDropdown((v) => (multiLevel ? !v : true))}>
        {DropdownButton}
      </button>
      {/* Dropdown */}
      {multiLevel ? (
        <div
          className={`flex flex-col border-y border-secondaryLight/50 dark:border-secondaryDark/50 text-center space-y-2 transition-all duration-300 overflow-hidden ${
            dropdown ? 'h-fit my-2 py-2' : 'h-0 border-y-0'
          } ${className}`}
        >
          {children}
        </div>
      ) : (
        <div ref={dropdownWrapOne}>
          <div
            ref={dropdownWrapTwo}
            className={`absolute flex flex-col text-center p-2 space-y-2 rounded-lg bg-primaryLight/40 dark:bg-primaryDark/40 backdrop-blur-3xl z-50 transition-all duration-300 left-1/2 -translate-x-1/2 top-[200%] shadow-nft dark:shadow-nftDark ${
              dropdown
                ? 'visible opacity-100 scale-100'
                : 'invisible scale-75 opacity-0'
            } ${className}`}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(Dropdown);
