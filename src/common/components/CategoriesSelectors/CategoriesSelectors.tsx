import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useIQuery } from 'common/reactQuery';
import { Category, Tag } from 'common/types';
import { fetchApi, getGetConfig } from 'common/utils';
import { getGetCategoriesUrl } from 'common/path';
import { Box, CircularProgress } from '@mui/material';
import CategorySelector from './CategorySelector';

type Props = {
  tags: Array<Tag['id']>;
  setTags: Dispatch<SetStateAction<Array<Tag['id']>>>;
};

const CategoriesSelectors = ({ tags, setTags }: Props) => {
  const { data: categories, isLoading: categoriesLoading } = useIQuery<Array<Category> | undefined>('categories', () =>
    fetchApi(getGetCategoriesUrl(), getGetConfig()),
  );

  useEffect(() => {
    setTags(Array(categories?.length).fill(undefined));
  }, [categories]);

  const selectTag = (tag: Tag['id'], index: number) =>
    setTags((prev) => prev.map((oldTag, index2) => (index === index2 ? tag : oldTag)));

  return (
    <Box sx={{ display: 'flex' }}>
      {categoriesLoading ? (
        <CircularProgress size={15} />
      ) : (
        categories?.map((category, index) => (
          <CategorySelector
            key={category.id}
            category={category}
            selectTag={(tag) => selectTag(tag, index)}
            selectedTagId={tags[index]}
          />
        ))
      )}
    </Box>
  );
};

export default CategoriesSelectors;
