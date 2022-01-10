import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { Category, Tag } from 'common/types';
import classes from './CategoriesSelector.module.scss';

type Props = {
  category: Category;
  selectedTagId?: Tag['id'];
  selectTag: (id: Tag['id']) => void;
};

function CategorySelector({ category, selectedTagId, selectTag }: Props) {
  return (
    <Select
      displayEmpty
      className={classes.container}
      sx={{ m: 1, borderBottom: 0, width: 100 }}
      variant="outlined"
      value={selectedTagId || ''}
      onChange={(e) => selectTag(e.target.value)}
    >
      <MenuItem value="">
        <em>{category.title}</em>
      </MenuItem>
      {category.items.map((tag) => (
        <MenuItem key={tag.id} value={tag.id} sx={{ color: `${tag.color}55` }}>
          {tag.name}
        </MenuItem>
      ))}
    </Select>
  );
}

export default CategorySelector;
