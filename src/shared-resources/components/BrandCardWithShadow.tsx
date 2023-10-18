import React from 'react';

interface Props {
  title?: string;
  tooltip?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: any;
}
const BrandCardWithShadow: React.FC<Props> = (props) => {
  const { title, description, children, className, tooltip, onClick } = props;
  return (
    <div
      className={`p-5 rounded-lg inline-flex justify-between flex-col ${className}`}
      tabIndex={0}
      role='button'
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) {
          onClick();
        }
      }}
      onClick={onClick}
    >
      <div>
        <div className='flex items-center space-x-2'>
          {title && <h6 className='text-2xl'>{title}</h6>}
          {tooltip && tooltip}
        </div>
        {description && <p className='mt-2'>{description}</p>}
      </div>
      {children && children}
    </div>
  );
};

export default React.memo(BrandCardWithShadow);
