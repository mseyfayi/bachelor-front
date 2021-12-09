import { Blog, Tag } from 'common/types';
import { Dispatch, SetStateAction } from 'react';
import classes from './HomePresentation.module.scss';

interface Props {
  filters: Array<Tag>;
  setFilters: Dispatch<SetStateAction<Array<Tag>>>;
  list: Array<Blog> | undefined;
  isLoading: boolean;
}

const HomePresentation = ({ filters, setFilters, list, isLoading }: Props) => (
  <div className={classes.container}>
    {list?.map((item) => (
      <div key={item.id}>{item.id}</div>
    ))}
  </div>
);

export default HomePresentation;
