import React from 'react';
import { OptionsObject, ProviderContext, SnackbarMessage, useSnackbar } from 'notistack';

interface InnerSnackbarUtilsConfiguratorProps {
  setUseSnackbarRef: (_useSnackbar: ProviderContext) => void;
}
const InnerSnackbarUtilsConfigurator: React.FC<InnerSnackbarUtilsConfiguratorProps> = (props) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: ProviderContext;
const setUseSnackbarRef = (useSnackbarRefProp: typeof useSnackbarRef) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator: React.FC = () => <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />;

interface SnackActionsOptions extends OptionsObject {
  onClick?: () => void;
}
export type SnackActions = Record<string, (message: SnackbarMessage, options?: SnackActionsOptions) => void>;

export const snackActions: SnackActions = {
  success(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'success' });
  },
  warning(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'warning' });
  },
  info(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'info' });
  },
  error(msg, options = {}) {
    this.toast(msg, { ...options, variant: 'error' });
  },
  toast(msg, options = {}) {
    const key = useSnackbarRef.enqueueSnackbar(msg, {
      onClick: () => useSnackbarRef.closeSnackbar(key),
      ...options,
    });
  },
};
