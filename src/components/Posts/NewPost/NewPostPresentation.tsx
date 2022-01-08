import { Box, Checkbox, CircularProgress, Dialog, DialogContent, DialogTitle, FormControlLabel, Typography } from '@mui/material';
import { Button, CategorySelector, MarkDown, OpenGraphImage, TextField } from 'common/components';
import { useEffect, useState } from 'react';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import { Category, OpenGraph, Post, Tag } from 'common/types';
import classes from './NewPostPresentation.module.scss';

type Props = {
  create: (post: Partial<Post>) => void;
  isLoading: boolean;
  githubLink: string;
  setGithubLink: (val: string) => void;
  openGraph?: OpenGraph;
  openGraphLoading: boolean;
  openGraphError: boolean;
  categories?: Array<Category>;
  categoriesLoading: boolean;
};

const NewPostPresentation = ({
  create,
  isLoading,
  githubLink,
  setGithubLink,
  openGraph,
  openGraphLoading,
  openGraphError,
  categories,
  categoriesLoading,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [isGithubProject, setGithubProject] = useState(false);
  const [tags, setTags] = useState<Array<Tag['id']>>([]);

  useEffect(() => {
    setTags(Array(categories?.length).fill(undefined));
  }, [categories]);

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
                  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                />
              )}
            </>
          )}
          <MarkDown value={content} onChange={setContent} />
        </DialogContent>
        <Box sx={{ display: 'flex' }}>
          {categoriesLoading ? (
            <CircularProgress size={15} />
          ) : (
            categories?.map((category, index) => (
              <CategorySelector
                key={category.id}
                category={category}
                selectTag={(tag) => setTags((prev) => prev.map((oldTag, index2) => (index === index2 ? tag : oldTag)))}
                selectedTagId={tags[index]}
              />
            ))
          )}
        </Box>
        <footer className={classes.dialogAction}>
          <Button onClick={() => create({ repoUrl: githubLink, content, tags })} isLoading={isLoading}>
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
