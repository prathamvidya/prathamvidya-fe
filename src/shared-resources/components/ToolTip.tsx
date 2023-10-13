import React, { useState } from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import ReactTooltip, { Place } from 'react-tooltip';

export interface TooltipProps {
  children: Exclude<React.ReactNode, undefined | null | ''>;
  place?: Place;
  dataTipComponent?: React.ReactElement;
}
const ToolTip: React.FC<TooltipProps> = (props) => {
  const [id] = useState(
    `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );
  const { children, place, dataTipComponent } = props;
  return (
    <div className='flex -space-y-0.5 '>
      {(dataTipComponent &&
        React.cloneElement(dataTipComponent, {
          'data-tip': true,
          'data-for': id,
          role: 'tooltip',
          'aria-label': children as string,
        })) || (
        <AiOutlineQuestionCircle
          className='outline-none cursor-pointer text-brandUtilityBlue'
          data-tip
          data-for={id}
          role='tooltip'
          aria-label={children as string}
        />
      )}
      <ReactTooltip
        place={place}
        effect='solid'
        backgroundColor='black'
        textColor='white'
        className='!bg-opacity-5 dark:bg-opacity-5 backdrop-blur relative'
        id={id}
      >
        {children}
      </ReactTooltip>
    </div>
  );
};

export default React.memo(ToolTip);
