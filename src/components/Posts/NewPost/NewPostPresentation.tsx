import { Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material';
import { useState } from 'react';
import classes from './NewPostPresentation.module.scss';

type Props = {};

const NewPostPresentation = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog maxWidth="xl" fullWidth open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent>{/* todo markdown */}koft</DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              /* todo */
            }}
          >
            ذخیره
          </Button>
          <Button onClick={() => setOpen(false)}>انصراف</Button>
        </DialogActions>
      </Dialog>
      <div className={classes.container} onClick={() => setOpen(true)}>
        جدید
      </div>
    </>
  );
};

export default NewPostPresentation;
