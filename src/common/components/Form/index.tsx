import React from 'react';
import { Box } from '@mui/material';
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
  fields: Fields<Data>;
  submitLabel: string;
  mutation: (data: Data) => void;
  isLoading: boolean;
  footerButton?: React.ReactNode;
};

const Form = <Data extends Record<string, unknown>>({ fields, submitLabel, mutation, isLoading, footerButton }: Props<Data>) => {
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
    <Box sx={{ pt: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ pt: 4, width: 300 }}>
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
