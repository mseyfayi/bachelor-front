import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import Button from 'common/components/Button';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import classes from './NewPostPresentation.module.scss';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });

type Props = { create: () => void; isLoading: boolean };

const NewPostPresentation = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('false');
  return (
    <>
      <Dialog maxWidth="xl" fullWidth open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent>
          <MDEditor value={content} onChange={(str) => setContent(str ?? '')} />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.create} isLoading={props.isLoading}>
            ذخیره
          </Button>
          <Button onClick={() => setOpen(false)}>انصراف</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.container} onClick={() => setOpen(true)}>
        <AddCircleOutlineRoundedIcon />
        جدید
      </div>
    </>
  );
};

export default NewPostPresentation;
