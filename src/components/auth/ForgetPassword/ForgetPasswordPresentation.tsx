import { useRouter } from 'next/router';
import Form, { Fields } from 'common/components/Form';
import * as yup from 'yup';
import { Button } from '@mui/material';

export type Data = {
  beheshtiEmail: string;
};

type Props = {
  mutate: (data: Data) => void;
  isLoading: boolean;
};

const ForgetPasswordPresentation = ({ mutate, isLoading }: Props) => {
  const router = useRouter();

  const fields: Fields<Data> = {
    beheshtiEmail: {
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
  };

  return (
    <Form
      fields={fields}
      submitLabel="دریافت کد"
      mutation={mutate}
      isLoading={isLoading}
      footerButton={<Button onClick={() => router.push('/auth/login')}>رمز عبور خود را به خاطر دارید؟</Button>}
    />
  );
};

export default ForgetPasswordPresentation;
