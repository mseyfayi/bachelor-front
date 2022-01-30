import { Typography } from '@mui/material';
import classes from './Github.module.scss';

const repositories = [
  {
    title: 'فرانت اند',
    link: 'https://github.com/madsams/bachelor-front',
  },
  {
    title: 'بک اند',
    link: 'https://github.com/mayazdi/KoolePoshti-BackEnd',
  },
  {
    title: 'ربات گیت‌هاب',
    link: 'https://github.com/madsams/kooleposhti-repositories',
  },
];
const Github = () => (
  <div className={classes.container}>
    <Typography component="h2">مخزن‌های متن باز پروژه</Typography>
    {repositories.map(({ link, title }) => (
      <a target="_blank" href={link}>
        {title}
      </a>
    ))}
  </div>
);

export default Github;
