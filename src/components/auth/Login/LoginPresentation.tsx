import * as yup from 'yup';
import Form, { Fields } from 'common/components/Form';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export type Data = {
  behestiEmail: string;
  password: string;
};

type Props = {
  mutation: (data: Data) => void;
  isLoading: boolean;
};

const LoginPresentation = ({ mutation, isLoading }: Props) => {
  const router = useRouter();

  const fields: Fields<Data> = {
    behestiEmail: {
      props: {
        dir: 'ltr',
        label: 'ایمیل بهشتی',
        placeholder: 'example@mail.sbu.ac.ir',
      },
      validation: yup
        .string()
        .matches(/^\S+@(mail\.)?sbu\.ac\.ir$/, 'ایمیل باید تحت دامنه بهشتی باشد')
        .required('ایمیل بهشتی اجباری است'),
    },
    password: {
      props: {
        dir: 'ltr',
        type: 'password',
        label: 'رمز عبور',
      },
      validation: yup.string().min(8, 'رمز ورود حداقل باید ۸ رقم باشد').required('رمز ورود اجباری است'),
    },
  };

  return (
    <Form
      fields={fields}
      submitLabel="ورود"
      mutation={mutation}
      isLoading={isLoading}
      footerButton={<Button onClick={() => router.push('/auth/sign-up')}>حساب کاربری ندارید؟</Button>}
    />
  );
};

export default LoginPresentation;
