import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import type { OpenGraph } from 'common/types';

const OpenGraphImage = (props: OpenGraph) => (
  <Box>
    <Image src={props.image} layout="responsive" width={100} height={50} />
  </Box>
);

export default OpenGraphImage;
