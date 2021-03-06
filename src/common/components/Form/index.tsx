import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button, FormError, TextField } from 'common/components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { TextFieldProps } from 'common/components/TextField';
import * as yup from 'yup';
import { FieldPath } from 'react-hook-form/dist/types/utils';

export type Fields<Data> = {
  [K in keyof Data]: {
    props?: TextFieldProps;
    validation: unknown;
  };
};
type Props<Data> = {
  title?: string;
  fields: Fields<Data>;
  submitLabel: string;
  mutation: (data: Data) => void;
  isLoading: boolean;
  footerButton?: React.ReactNode;
};

const Form = <Data extends Record<string, unknown>>({
  title,
  fields,
  submitLabel,
  mutation,
  isLoading,
  footerButton,
}: Props<Data>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(
      yup.object(Object.keys(fields).reduce((prev, name) => ({ ...prev, [name]: fields[name].validation }), {})),
    ),
  });

  return (
    <Box>
      <Typography fontWeight={700} fontSize={18} width="100%">
        {title}
      </Typography>
      <Box sx={{ width: 300 }}>
        {Object.keys(fields).map((name) => (
          <React.Fragment key={name}>
            <TextField id={name} {...fields[name].props} {...register(name as FieldPath<Data>)} />
            <FormError error={errors[name]} />
          </React.Fragment>
        ))}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            onClick={handleSubmit(mutation as SubmitHandler<Data>)}
            isLoading={isLoading}
            disabled={Object.keys(errors).length > 0}
          >
            {submitLabel}
          </Button>
          {footerButton}
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
