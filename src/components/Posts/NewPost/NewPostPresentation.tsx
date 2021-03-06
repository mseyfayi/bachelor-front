import { Checkbox, Dialog, DialogContent, DialogTitle, FormControlLabel, Typography } from '@mui/material';
import { Button, CategoriesSelectors, MarkDown, OpenGraphImage, TextField } from 'common/components';
import { Dispatch, SetStateAction, useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { OpenGraph, Post, Tag } from 'common/types';
import classes from './NewPostPresentation.module.scss';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  create: (post: Partial<Post>) => Promise<unknown>;
  isLoading: boolean;
  githubLink: string;
  setGithubLink: (val: string) => void;
  openGraph?: OpenGraph;
  openGraphLoading: boolean;
  openGraphError: boolean;
};

const NewPostPresentation = ({
  open,
  setOpen,
  create,
  isLoading,
  githubLink,
  setGithubLink,
  openGraph,
  openGraphLoading,
  openGraphError,
}: Props) => {
  const [content, setContent] = useState('');
  const [isGithubProject, setGithubProject] = useState(false);
  const [tags, setTags] = useState<Array<Tag['id']>>([]);

  return (
    <>
      <Dialog maxWidth="xl" fullWidth className={classes.dialogContainer} open={open} onClose={() => setOpen(false)}>
        <DialogTitle>پست جدید</DialogTitle>
        <DialogContent sx={{ display: 'block', borderBottom: 1, borderColor: '#ccc' }}>
          <FormControlLabel
            control={<Checkbox checked={isGithubProject} onChange={() => setGithubProject((prev) => !prev)} />}
            label="پروژه گیت‌هاب"
          />
          {isGithubProject && (
            <>
              <TextField
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
                placeholder="github-username/repository-name"
                dir="ltr"
                isLoading={openGraphLoading}
              />
              {openGraphError && (
                <Typography fontSize={13} color="red">
                  دریافت مخزن با خطا مواجه شد
                </Typography>
              )}
              {!openGraphLoading && !openGraphError && openGraph && (
                <OpenGraphImage
                  openGraph={openGraph}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              )}
            </>
          )}
          <MarkDown value={content} onChange={setContent} />
        </DialogContent>
        <div className={classes.categorySelectors}>
          <CategoriesSelectors tags={tags} setTags={setTags} />
        </div>
        <footer className={classes.dialogAction}>
          <Button
            onClick={() => {
              create({ repoUrl: githubLink, content, tags }).finally(() => {
                setContent('');
                setGithubProject(false);
                setTags([]);
              });
            }}
            isLoading={isLoading}
          >
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
