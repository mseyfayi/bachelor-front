export const classnames = (...classes: Array<string>) => classes.reduce((prev, name) => `${prev} ${name}`, '');
