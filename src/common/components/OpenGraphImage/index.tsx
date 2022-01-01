import React from 'react';
import { Box, BoxProps } from '@mui/material';
import Image from 'next/image';
import type { OpenGraph } from 'common/types';

interface Props extends BoxProps {
  openGraph: OpenGraph;
}

const OpenGraphImage = ({ openGraph, ...props }: Props) => (
  <Box {...props}>
    <Image src={openGraph.image} alt={openGraph.alt} layout="fixed" width={400} height={200} />
  </Box>
);

export default OpenGraphImage;
