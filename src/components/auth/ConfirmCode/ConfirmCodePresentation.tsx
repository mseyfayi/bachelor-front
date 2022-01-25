import CodeInput from 'react-verification-code-input';
import { Box, Typography } from '@mui/material';
import { useCountDown } from 'common/utils';
import classes from './ConfirmCodePresentation.module.scss';

type Props = {
  mutate: (data: string) => void;
  isLoading: boolean;
};

const ConfirmCodePresentation = ({ mutate, isLoading }: Props) => {
  const count = useCountDown(120);
  return (
    <Box className={classes.container}>
      <Typography>کد تایید ایمیل شده را وارد کنید</Typography>
      <CodeInput type="number" className={classes.codeInput} fields={5} onComplete={mutate} loading={isLoading} autoFocus />
    </Box>
  );
};

export default ConfirmCodePresentation;
