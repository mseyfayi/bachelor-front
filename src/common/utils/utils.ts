import { User } from 'common/types';

export const classnames = (...classes: Array<string>) => classes.reduce((prev, name) => `${prev} ${name}`, '');

export const getUsername = (user: Partial<User>) =>
  user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.githubId;
