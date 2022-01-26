import * as yup from 'yup';
import Form, { Fields } from 'common/components/Form';
import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import NotAuthenticatedLayout from 'components/layout/NotAuthenticatedLayout';
import classes from './LoginPresentation.module.scss';

export type Data = {
  beheshtiEmail: string;
  password: string;
};

type Props = {
  mutate: (data: Data) => void;
  isLoading: boolean;
};

const LoginPresentation = ({ mutate, isLoading }: Props) => {
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
    <NotAuthenticatedLayout className={classes.layout}>
      <section className={classes.formSection}>
        <Form
          title="ورود"
          fields={fields}
          submitLabel="ورود"
          mutation={mutate}
          isLoading={isLoading}
          footerButton={
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
              <Button sx={{ py: 0 }} onClick={() => router.push('/auth/sign-up')}>
                حساب کاربری ندارید؟
              </Button>
              <Button sx={{ py: 0 }} onClick={() => router.push('/auth/forget-password')}>
                رمز عبور خود را فراموش کرده‌اید؟
              </Button>
            </Box>
          }
        />
      </section>
      <section className={classes.contextSection}>
        <div>
          <h2>کوله پشتی</h2>
          <h3>شبکه اجتماعی آموزشی دانشکده کامپیوتر </h3>
          <p>با هم دانشکده‌ای‌هات ارتباط برقرار کن</p>
          <p>شبکه اجتماعی آموزشی کوله پشتی جاییه برای انتقال تجربه</p>
          <p>اشتراک محتویات علمی و فنی بین دانشجویان دانشکده کامپیوتر</p>
        </div>
      </section>
    </NotAuthenticatedLayout>
  );
};

export default LoginPresentation;
