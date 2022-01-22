import React from 'react';
import { Tag } from 'common/types';
import { classnames } from 'common/utils';
import classes from './TagItem.module.scss';

interface Props {
  tag: Tag;
}
const TagItem = ({ tag }: Props) => (
  <div
    style={{ background: `${tag.color}20` }}
    className={classnames('d-flex flex-row align-items-center justify-content-center', classes.container)}
  >
    {tag.name}
  </div>
);

export default TagItem;
