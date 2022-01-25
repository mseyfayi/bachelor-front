import CodeInput from 'react-verification-code-input';
import { Box, Typography } from '@mui/material';
import classes from './ConfirmCodePresentation.module.scss';

type Props = {
  email: string;
  mutate: (data: string) => void;
  isLoading: boolean;
};

const ConfirmCodePresentation = ({ email, mutate, isLoading }: Props) => (
  <Box className={classes.container}>
    <Typography className={classes.title}>کد تایید ایمیل شده را وارد کنید</Typography>
    <Typography className={classes.desc}>{`کد تایید به ایمیل ${email} شده است`}</Typography>
    <CodeInput type="number" className={classes.codeInput} fields={5} onComplete={mutate} loading={isLoading} autoFocus />
  </Box>
);

export default ConfirmCodePresentation;
