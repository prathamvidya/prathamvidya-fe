/* eslint-disable react/react-in-jsx-scope */

'use client';

import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import { components } from '../src/slices';

const SliceSimulatorPage = () => (
  <SliceSimulator
    // eslint-disable-next-line react/no-unstable-nested-components
    sliceZone={(props) => <SliceZone {...props} components={components} />}
  />
);

export default SliceSimulatorPage;
