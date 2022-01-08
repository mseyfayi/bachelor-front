import * as yup from 'yup';
import Form, { Fields } from 'common/components/Form';

export type Data = {
  behestiEmail: string;
  password: string;
};

type Props = {
  signIn: (data: Data) => void;
  isLoading: boolean;
};

const LoginPresentation = ({ signIn, isLoading }: Props) => {
  const fields: Fields<Data> = {
    behestiEmail: {
      props: {
        dir: 'ltr',
        placeholder: 'example@mail.sbu.ac.ir',
        label: 'ایمیل بهشتی',
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
        placeholder: 'password',
        label: 'رمز عبور',
      },
      validation: yup.string().min(8, 'رمز ورود حداقل باید ۸ رقم باشد').required('رمز ورود اجباری است'),
    },
  };
  return <Form fields={fields} submitLabel="ورود" mutation={signIn} isLoading={isLoading} />;
};

export default LoginPresentation;
