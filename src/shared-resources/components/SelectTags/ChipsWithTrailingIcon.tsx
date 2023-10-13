import classNames from 'classnames';
import React from 'react';
import { IconType } from 'react-icons';
import ReactIcon from '../Icon/ReactIcon';

interface Props {
  theme?: 'outlined' | 'solid' | 'disabled';
  tagName: string;
  onClickHandler?: () => void;
  trailingIcon?: IconType;
  onTrailingIconClickHandler?: () => void;
  trailingIconClassName?: string;
  className?: string;
}

const ChipsWithTrailingIcon: React.FunctionComponent<Props> = ({
  theme,
  tagName,
  onClickHandler,
  trailingIcon,
  onTrailingIconClickHandler,
  trailingIconClassName,
  className,
}) => (
  <span
    className={classNames(
      'inline-flex items-center px-3 py-2 box-border rounded-5 min-w-fit',
      {
        'bg-brandSecondary text-white border border-brandSecondary':
          theme === 'solid',
        'bg-white text-brandSecondary border border-brandSecondary':
          theme === 'outlined',
        'bg-brandSecondary bg-opacity-50 pointer-events-none text-white':
          theme === 'disabled',
      },
      className
    )}
    onClick={onClickHandler}
    onKeyDown={(e) => {
      if (e.key === 'Enter' && onClickHandler) {
        onClickHandler();
      }
    }}
    role='menuitem'
    tabIndex={onClickHandler ? 0 : -1}
  >
    <span
      className={classNames(
        'font-[400] max-w-[6rem] sm:max-w-[12rem] lg:max-w-xs truncate mx-4 whitespace-pre'
      )}
    >
      {tagName}
    </span>
    {trailingIcon && onTrailingIconClickHandler && (
      <ReactIcon
        icon={trailingIcon}
        className={classNames(
          'flex-shrink-0 w-4 h-4 ml-2 cursor-pointer flex-end focus:outline-none rounded-sm',
          trailingIconClassName
        )}
        onClick={(e) => {
          onTrailingIconClickHandler();
          e.stopPropagation();
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            onTrailingIconClickHandler();
          }
          e.stopPropagation();
        }}
        tabIndex={0}
      />
    )}
  </span>
);

ChipsWithTrailingIcon.defaultProps = {
  theme: 'solid',
};

export default React.memo(ChipsWithTrailingIcon);
