import React, { FC } from "react";
import { SnackbarProvider as NotistackProvider} from 'notistack';
import { SnackbarUtilsConfigurator } from '../utils';

type SnackbarProviderProps = {
  children: React.ReactNode;
};

export const SnackbarProvider: FC<SnackbarProviderProps> = (props) => {
  const { children } = props;

  return (
    <NotistackProvider
      domRoot={document.getElementById("react-notification") || undefined}
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
    >
      <SnackbarUtilsConfigurator />
      {children}
    </NotistackProvider>
  );
};
