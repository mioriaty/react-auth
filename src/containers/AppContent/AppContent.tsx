import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import Routes from 'routes';
import styleBase from 'styles/base';
import { ThemeOverrides, ThemeProvider, useStyleSheet, View } from 'wiloke-react-core';
import * as css from './styles';

export const themeOverrides: ThemeOverrides = {
  fonts: {
    primary: 'Roboto, sans-serif',
    secondary: 'Poppins, sans-serif',
    tertiary: 'Merriweather, serif',
    quaternary: 'Vibes, serif',
  },
  colors: {
    primary: '#21e6c1',
    secondary: '#5E76F1',
    tertiary: '#F57070',
    quaternary: '#FBC473',
    light: '#ffffff',
    gray1: '#F8F8FC',
    gray2: '#EEEEF3',
    gray3: '#DEDEE9',
    gray4: '#D2D2E2',
    gray5: '#9E9ECC',
    gray6: '#6D6D9C',
    gray7: '#494880',
    gray8: '#26256C',
    gray9: '#17174F',
    dark: '#0f0f36',
  },
  nightModeColors: {
    dark: '#ffffff',
    gray9: '#F8F8FC',
    gray8: '#EEEEF3',
    gray7: '#DEDEE9',
    gray6: '#D2D2E2',
    gray5: '#9E9ECC',
    gray4: '#6D6D9C',
    gray3: '#494880',
    gray2: '#26256C',
    gray1: '#17174F',
    light: '#17174F',
  },
  cssInJs: {
    pixelToRem: false,
    devMode: true,
  },
  grid: {
    container: {
      width: 1300,
      gap: 15,
    },
    columns: {
      max: 12,
      gap: 30,
    },
    breakpoints: {
      xs: 'default',
      sm: 768,
      md: 992,
      lg: 1300,
    },
  },
};

export const CSSGlobal: FC = ({ children }) => {
  const { renderer } = useStyleSheet();
  renderer.renderStatic(styleBase);

  return <View css={css.cssGlobalWithTheme}>{children}</View>;
};

const AppContent: FC = () => {
  const direction = useSelector((state: AppState) => state.direction);
  return (
    <ThemeProvider themeOverrides={{ ...themeOverrides, direction }}>
      <CSSGlobal>
        <Routes />
      </CSSGlobal>
    </ThemeProvider>
  );
};

export default AppContent;
