import CodeInput from 'react-verification-code-input';
import { Box, Typography } from '@mui/material';
import classes from './ConfirmCodePresentation.module.scss';

type Props = {
  mutate: (data: string) => void;
  isLoading: boolean;
};

const ConfirmCodePresentation = ({ mutate, isLoading }: Props) => (
  <Box className={classes.container}>
    <Typography>کد تایید ایمیل شده را وارد کنید</Typography>
    <Box dir="ltr">
      <CodeInput
        type="text"
        className={classes.codeInput}
        fields={5}
        onComplete={(code) => mutate(code)}
        loading={isLoading}
        autoFocus
      />
    </Box>
  </Box>
);

export default ConfirmCodePresentation;
