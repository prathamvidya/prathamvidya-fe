import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';

interface Props extends IconBaseProps {
  icon: IconType;
}

const ReactIcon: React.FunctionComponent<Props> = ({ icon, ...props }) =>
  React.createElement(icon, props);

export default React.memo(ReactIcon);
