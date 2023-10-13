import classNames from 'classnames';
import React from 'react';

export enum HeadingTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

interface PageHeadingProps {
  title: string;
  headingType: HeadingTypes;
  tooltip?: React.ReactElement;
  className?: string;
}

const BrandGradientHeadingWithTooltip: React.FC<PageHeadingProps> = ({
  title,
  headingType,
  tooltip,
  className,
}) => {
  const classes = classNames(
    `text-center pb-1 bg-brightGradient bg-clip-text text-transparent capitalize`,
    className
  );
  return (
    <div className='inline-flex items-center space-x-2'>
      {headingType === HeadingTypes.h1 && <h1 className={classes}>{title}</h1>}
      {headingType === HeadingTypes.h2 && <h2 className={classes}>{title}</h2>}
      {headingType === HeadingTypes.h3 && <h3 className={classes}>{title}</h3>}
      {headingType === HeadingTypes.h4 && <h4 className={classes}>{title}</h4>}
      {headingType === HeadingTypes.h5 && <h5 className={classes}>{title}</h5>}
      {headingType === HeadingTypes.h6 && <h6 className={classes}>{title}</h6>}
      {tooltip && tooltip}
    </div>
  );
};

export default React.memo(BrandGradientHeadingWithTooltip);
