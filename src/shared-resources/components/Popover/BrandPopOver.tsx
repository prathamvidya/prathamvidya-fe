import useEscapeKeyDetector from 'hooks/useEscapeKeyDetector';
import useOutsideClickDetector from 'hooks/useOutsideClickDetector';
import React from 'react';

interface BrandPopOverProps {
  dropdown: boolean;
  setDropdown: (value: boolean) => void;
  children: React.ReactNode;
}

const BrandPopOver: React.FC<BrandPopOverProps> = ({
  dropdown,
  setDropdown,
  children,
}) => {
  const dropdownWrapOne = useEscapeKeyDetector<HTMLDivElement>(() =>
    setDropdown(false)
  );
  const dropdownWrapTwo = useOutsideClickDetector<HTMLDivElement>(() =>
    setDropdown(false)
  );
  return (
    <div ref={dropdownWrapOne}>
      <div
        ref={dropdownWrapTwo}
        className={`fixed top-0 flex flex-col text-center p-2 space-y-2 rounded-lg bg-slate-400/40 dark:bg-slate-700/50 backdrop-blur z-[100] transition-all duration-300 shadow-nft ${
          dropdown
            ? 'visible opacity-100 scale-100'
            : 'invisible scale-75 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(BrandPopOver);
