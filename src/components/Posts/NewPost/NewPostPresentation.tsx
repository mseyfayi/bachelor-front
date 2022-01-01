import { Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel } from '@mui/material';
import { Button, MarkDown, TextField } from 'common/components';
import { useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Post } from 'common/types';
import classes from './NewPostPresentation.module.scss';

type Props = {
  create: (post: Partial<Post>) => void;
  isLoading: boolean;
  githubLink: string;
  setGithubLink: (val: string) => void;
};

const NewPostPresentation = ({ create, isLoading, githubLink, setGithubLink }: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [isGithubProject, setGithubProject] = useState(false);

  return (
    <>
      <Dialog maxWidth="xl" fullWidth className={classes.dialogContainer} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent sx={{ display: 'block' }}>
          <FormControlLabel
            control={<Checkbox checked={isGithubProject} onChange={() => setGithubProject((prev) => !prev)} />}
            label="پروژه گیت‌هاب"
          />
          {isGithubProject && (
            <TextField
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
              placeholder="github-username/repository-name"
            />
          )}
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
