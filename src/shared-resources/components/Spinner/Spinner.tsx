import React from 'react';
import classNames from 'classnames';
import { AbbreviatedSize } from 'shared-resources/types/AbbreviatedSize.type';
import './Spinner.module.css';
import { FaSpinner } from 'react-icons/fa';

export interface Props {
  size?: AbbreviatedSize;
  border?: string;
  customClassName?: string;
}

const TopRoundedSpinner: React.FunctionComponent<Props> = ({
  size = 'md',
  border = 'border-red-300',
  customClassName,
}) => {
  const spinnerClassForSize: Record<AbbreviatedSize, string> = {
    xs: 'spinner-xs',
    sm: 'spinner-sm',
    md: 'spinner-md',
    lg: 'spinner-lg',
    xl: 'spinner-xl',
    custom: '',
  };

  return (
    <FaSpinner
      className={classNames(
        'w-full mx-auto animate-spin',
        spinnerClassForSize[size],
        border,
        customClassName
      )}
    />
  );
};

export default React.memo(TopRoundedSpinner);
