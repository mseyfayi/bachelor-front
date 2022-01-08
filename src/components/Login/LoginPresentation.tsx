import { Box } from '@mui/material';
import { Button, FormError, TextField } from 'common/components';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    behestiEmail: yup
      .string()
      .matches(/^\S+@(mail\.)?sbu\.ac\.ir$/, 'ایمیل باید تحت دامنه بهشتی باشد')
      .required('ایمیل بهشتی اجباری است'),
    password: yup.string().min(8, 'رمز ورود حداقل باید ۸ رقم باشد').required('رمز ورود اجباری است'),
  })
  .required();

export type Data = {
  behestiEmail: string;
  password: string;
};

type Props = {
  singIn: (data: Data) => void;
  isLoading: boolean;
};

const LoginPresentation = ({ singIn, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({ resolver: yupResolver(schema) });

  return (
    <Box sx={{ pt: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ pt: 4, width: 300 }}>
        <TextField
          id="behestiEmail"
          dir="ltr"
          placeholder="example@mail.sbu.ac.ir"
          label="ایمیل بهشتی"
          {...register('behestiEmail')}
        />
        <FormError error={errors.behestiEmail} />
        <TextField id="password" dir="ltr" type="password" placeholder="password" label="رمز عبور" {...register('password')} />
        <FormError error={errors.password} />
        <br />
        <Button onClick={handleSubmit(singIn)} isLoading={isLoading} disabled={Object.keys(errors).length > 0}>
          ورود
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPresentation;
