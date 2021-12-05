import classes from './HomePresentation.module.scss';

type Props = {
  list: Array<{ id: string }>;
};

const HomePresentation = ({ list }: Props) => (
  <div className={classes.container}>
    {list.map((item) => (
      <div key={item.id}>{item.id}</div>
    ))}
  </div>
);

export default HomePresentation;
