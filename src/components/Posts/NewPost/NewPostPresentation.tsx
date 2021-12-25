import { Dialog, DialogContent, DialogTitle, DialogActions } from '@mui/material';
import Button from 'common/components/Button';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import classes from './NewPostPresentation.module.scss';

type Props = { create: () => void; isLoading: boolean };

const NewPostPresentation = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Dialog maxWidth="xl" fullWidth open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent>{/* todo markdown */}koft</DialogContent>
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
