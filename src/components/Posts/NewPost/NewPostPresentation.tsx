import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Button from 'common/components/Button';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Post } from 'common/types';
import classes from './NewPostPresentation.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

type Props = { create: (post: Partial<Post>) => void; isLoading: boolean };

const NewPostPresentation = ({ create, isLoading }: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  return (
    <>
      <Dialog maxWidth="xl" fullWidth className={classes.dialogContainer} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <MDEditor value={content} onChange={(str) => setContent(str ?? '')} />
        </DialogContent>
        <footer className={classes.dialogAction}>
          <Button onClick={() => create({ content })} isLoading={isLoading}>
            ذخیره
          </Button>
          <Button onClick={() => setOpen(false)}>انصراف</Button>
        </footer>
      </Dialog>
      <div className={classes.container} onClick={() => setOpen(true)}>
        <AddCircleOutlineRoundedIcon />
        جدید
      </div>
    </>
  );
};

export default NewPostPresentation;
