import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import Button from 'common/components/Button';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Post } from 'common/types';
import { MarkDown } from 'common/components';
import classes from './NewPostPresentation.module.scss';

type Props = { create: (post: Partial<Post>) => void; isLoading: boolean };

const NewPostPresentation = ({ create, isLoading }: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  return (
    <>
      <Dialog maxWidth="xl" fullWidth className={classes.dialogContainer} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent>
          <MarkDown value={content} onChange={setContent} />
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
