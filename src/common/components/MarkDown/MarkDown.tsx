import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import React from 'react';
import dynamic from 'next/dynamic';
import Markdown from 'react-markdown';
import Box from '@mui/material/Box';
import classes from './MarkDown.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

interface Props {
  value: string;
  onChange?: (value: string) => void;
  preview?: boolean;
}

const MarkDown = ({ value, onChange, preview }: Props) => (
  <Box className={classes.md} sx={{ minHeight: 300, maxWidth: '100%' }}>
    {preview ? (
      <Markdown>{value}</Markdown>
    ) : (
      <MDEditor value={value} onChange={(str) => str && onChange && onChange(str)} height={300} />
    )}
  </Box>
);

export default MarkDown;
