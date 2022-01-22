import Form, { Fields } from 'common/components/Form';
import * as yup from 'yup';

export type Data = {
  beheshtiEmail: string;
  otp: number;
  newPassword: string;
  newPasswordConfirmation: string;
};

type Props = {
  email: string;
  mutate: (data: Data) => void;
  isLoading: boolean;
};

const ResetPasswordPresentation = ({ email, mutate, isLoading }: Props) => {
  const fields: Fields<Data> = {
    beheshtiEmail: {
      props: {
        dir: 'ltr',
        label: 'ایمیل بهشتی',
        disabled: true,
        value: email,
      },
      validation: yup.string(),
    },
    otp: {
      props: {
        dir: 'ltr',
        label: 'کد تایید پیامکی',
        inputProps: {
          maxLength: 5,
        },
      },
      validation: yup.string().required('کد تایید اجباری است'),
    },
    newPassword: {
      props: {
        dir: 'ltr',
        type: 'password',
        label: 'رمز عبور جدید',
      },
      validation: yup.string().min(8, 'رمز ورود حداقل باید ۸ رقم باشد').required('رمز ورود اجباری است'),
    },
    newPasswordConfirmation: {
      props: {
        dir: 'ltr',
        type: 'password',
        label: 'تکرار رمز عبور',
      },
      validation: yup.string().oneOf([yup.ref('newPassword'), null], 'تایید رمز عبور با رمز عبور تداخل دارد'),
    },
  };

  return <Form fields={fields} submitLabel="بازنشانی" mutation={mutate} isLoading={isLoading} />;
};

export default ResetPasswordPresentation;
