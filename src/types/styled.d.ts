import 'styled-components';

declare module 'styled-components' {
  export interface Colors {
    key_color: string;
    key_color_light: string;
    bg_white: string;
    text_white: string;
    text_black: string;
    text_lightgray: string;
    text_red: string;
    input_gray: string;
  }
  export interface Font {
    xxs: string;
    xs: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
    xxxl: string;
  }
}
