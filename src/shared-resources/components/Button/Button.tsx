import classNames from 'classnames';
import React from 'react';
import Spinner from '../Spinner/Spinner';

interface Props {
  type?: 'button' | 'submit';
  children?: React.ReactNode;
  id?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  isSubmitting?: boolean;
  icon?: React.ReactNode;
  iconLarge?: boolean;
  theme?:
    | 'primary'
    | 'secondaryOutline1'
    | 'secondaryFilled'
    | 'secondaryOutline2'
    | 'secondaryFilled2';
}

const Button: React.FC<Props> = ({
  type,
  className,
  children,
  onClick,
  disabled,
  isSubmitting,
  icon,
  iconLarge,
  theme,
  ...rest
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    {...rest}
    className={classNames(
      'inline-flex relative',
      'rounded-10',
      'justify-center items-center',
      'leading-5',
      'transition ease-in-out',
      'duration-300',
      !icon && 'px-10 py-5',
      theme === 'primary' &&
        'text-white shadow-button disabled:bg-none disabled:bg-brandPageBackground disabled:text-brandGray5 disabled:shadow-none primaryButtonGradient',
      theme === 'secondaryOutline1' &&
        'text-brandSecondary border-brandSecondary border-2 bg-transparent hover:bg-none hover:bg-brandSecondary hover:text-white disabled:border-brandPageBackground disabled:text-brandGray6',
      theme === 'secondaryOutline2' &&
        'text-white border-2 border-white bg-transparent hover:bg-white hover:text-brandSecondary disabled:border-brandGray7 disabled:text-brandGray7',
      theme === 'secondaryFilled' &&
        'text-brandSecondary bg-brandGray2 border-brandSecondary border-2 hover:bg-brandSecondary hover:text-white disabled:bg-none disabled:bg-transparent disabled:border-brandPageBackground disabled:text-brandGray6',
      // To be decided
      theme === 'secondaryFilled2' &&
        'text-brandSecondary bg-white border-brandSecondary border-2 hover:bg-brandSecondary hover:text-white disabled:border-brandPageBackground disabled:text-brandGray6',
      className,
      disabled && 'pointer-events-none '
    )}
  >
    {!isSubmitting && icon && (
      <span
        className={classNames(
          'rounded-full bg-bluesGradient flex text-white text-xl justify-center items-center',
          iconLarge ? 'w-11 h-11' : 'w-9 h-9'
        )}
      >
        {icon}
      </span>
    )}
    {isSubmitting ? <Spinner size='xs' /> : children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  iconLarge: false,
};

export default React.memo(Button);
