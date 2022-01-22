import classes from './ConfirmCodePresentation.module.scss';

type Props = { email: string };

const ConfirmCodePresentation = ({ email }: Props) => <div className={classes.container} />;

export default ConfirmCodePresentation;
