import React from 'react';
import { Box, BoxProps } from '@mui/material';
import type { OpenGraph } from 'common/types';

interface Props extends BoxProps {
  openGraph: OpenGraph;
}

const OpenGraphImage = ({ openGraph, ...props }: Props) => (
  <Box {...props}>
    <img src={openGraph.image} alt={openGraph['image:alt']} width={400} height={200} />
  </Box>
);

export default OpenGraphImage;
