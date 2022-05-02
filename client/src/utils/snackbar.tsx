import { OptionsObject, useSnackbar, WithSnackbarProps } from 'notistack';
import { IconButton } from '@material-ui/core';
import { Close as IconClose } from '@material-ui/icons';
import React from 'react';

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = (props: IProps) => {
  props.setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: WithSnackbarProps;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};

interface SnackbarCloseButtonProps {
  key: string | number;
}

export const SnackbarCloseButton = ({ key }: SnackbarCloseButtonProps) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton onClick={() => closeSnackbar(key)}>
      <IconClose style={{ color: '#ffffff' }} />
    </IconButton>
  );
};

export const SnackbarUtils = {
  success(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'success', autoHideDuration: 5000 });
  },
  warning(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'warning', autoHideDuration: 5000 });
  },
  info(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'info', autoHideDuration: 5000 });
  },
  error(msg: string, options: OptionsObject = {}) {
    this.toast(msg, { ...options, variant: 'error', autoHideDuration: 5000 });
  },
  toast(msg: string, options: OptionsObject = {}) {
    useSnackbarRef.enqueueSnackbar(msg, options);
  },
  remove(key: string) {
    useSnackbarRef.closeSnackbar(key);
  },
};
