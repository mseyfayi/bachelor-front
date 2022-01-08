import * as yup from 'yup';
import Form, { Fields } from 'common/components/Form';

export type Data = {
  firstName: string;
  lastName: string;
  behestiEmail: string;
  password: string;
  confirmPassword: string;
};

type Props = {
  mutation: (data: Data) => void;
  isLoading: boolean;
};

const SignUpPresentation = ({ mutation, isLoading }: Props) => {
  const fields: Fields<Data> = {
    firstName: {
      validation: yup.string().required('نام اجباری است'),
      props: {
        label: 'نام',
      },
    },
    lastName: {
      validation: yup.string().required('نام خانوادگی اجباری است'),
      props: {
        label: 'نام خانوادگی',
      },
    },
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
        label: 'رمز عبور',
      },
      validation: yup.string().min(8, 'رمز ورود حداقل باید ۸ رقم باشد').required('رمز ورود اجباری است'),
    },
    confirmPassword: {
      props: {
        dir: 'ltr',
        type: 'password',
        label: 'تکرار رمز عبور',
      },
      validation: yup.string().oneOf([yup.ref('password'), null], 'تایید رمز عبور با رمز عبور تداخل دارد'),
    },
  };
  return <Form fields={fields} submitLabel="ثبت نام" mutation={mutation} isLoading={isLoading} />;
};

export default SignUpPresentation;
