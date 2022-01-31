import * as yup from 'yup';
import Form, { Fields } from 'common/components/Form';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

export type Data = {
  firstName: string;
  lastName: string;
  beheshtiEmail: string;
  githubId: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  mutate: (data: Data) => void;
  isLoading: boolean;
};

const SignUpPresentation = ({ mutate, isLoading }: Props) => {
  const router = useRouter();

  const fields: Fields<Data> = {
    firstName: {
      validation: yup.string().required('نام اجباری است'),
      props: {
        label: 'نام',
        required: true,
      },
    },
    lastName: {
      validation: yup.string().required('نام خانوادگی اجباری است'),
      props: {
        label: 'نام خانوادگی',
        required: true,
      },
    },
    beheshtiEmail: {
      props: {
        dir: 'ltr',
        placeholder: 'example@mail.sbu.ac.ir',
        label: 'ایمیل بهشتی',
        required: true,
      },
      validation: yup.string().required('ایمیل بهشتی اجباری است'),
    },
    githubId: {
      validation: yup.string(),
      props: {
        dir: 'ltr',
        label: 'شناسه گیت‌هاب',
      },
    },
    password: {
      props: {
        dir: 'ltr',
        type: 'password',
        label: 'رمز عبور',
        required: true,
      },
      validation: yup.string().min(8, 'رمز ورود حداقل باید ۸ رقم باشد').required('رمز ورود اجباری است'),
    },
    confirmPassword: {
      props: {
        dir: 'ltr',
        type: 'password',
        label: 'تکرار رمز عبور',
        required: true,
      },
      validation: yup.string().oneOf([yup.ref('password'), null], 'تایید رمز عبور با رمز عبور تداخل دارد'),
    },
  };

  return (
    <Form
      fields={fields}
      title="ثبت نام"
      submitLabel="ثبت نام"
      mutation={mutate}
      isLoading={isLoading}
      footerButton={<Button onClick={() => router.push('/auth/login')}>قبلا ثبت نام کرده‌اید؟</Button>}
    />
  );
};

export default SignUpPresentation;
