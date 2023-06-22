import 'styled-components';

type TBreakpoint = {
  minWidth: string;
  maxWidth?: string;
};

type TColors = {
  gold: string;
  red: string;
  green: string;
  black: string;
  white: string;
  pink: string;
};

type TFontFamily = {
  monoton: string;
  poppings: string;
};

type TFontSize = {
  base: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;
  s7: string;
  s8: string;
  s9: string;
  s10: string;
};

type TFontWeight = {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
};

type TText = {
  shadow: string;
};

type TSpacing = {
  s0: string;
  s1: string;
  s2: string;
  s3: string;
  s4: string;
  s5: string;
  s6: string;
  s7: string;
  s8: string;
  s9: string;
  s10: string;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoint: {
      xs: TBreakpoint;
      sm: TBreakpoint;
      md: TBreakpoint;
      lg: TBreakpoint;
      xlg: TBreakpoint;
    };
    color: TColors;
    font: {
      family: TFontFamily;
      size: TFontSize;
      weight: TFontWeight;
    };
    text: TText;
    spacing: TSpacing;
  }
}
