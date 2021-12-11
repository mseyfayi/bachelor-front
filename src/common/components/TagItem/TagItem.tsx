import React from 'react';
import { Tag } from 'common/types';
import { classnames } from 'common/utils';
import classes from './TagItem.module.scss';

interface Props {
  tag: Tag;
  deletable?: boolean;
  deleteTag?: (tag: Tag) => void;
}
const TagItem = ({ tag, deletable, deleteTag }: Props) => (
  <div
    style={{ background: `${tag.color}30` }}
    className={classnames('d-flex flex-row align-items-center justify-content-center', classes.container)}
  >
    {tag.name}
  </div>
);

export default TagItem;
