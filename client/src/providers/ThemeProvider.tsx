import React, { FC } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../components/ui";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { children } = props;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
