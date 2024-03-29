import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: {
        white100: string,
        white70: string,
        white50: string,
        white10: string,
        // hover: string,
        // active: string,
      }
      darkBlue: string,
      blue: string,
    },
    fonts: {
      MullerBold90: string,
      MullerBold16: string,
      MullerMedium70: string,
      MullerBol62: string,
      MullerRegular52: string,
      MullerBold24: string,
      MullerRegular18: string,
      MullerBold42: string,
      MullerRegular16: string,
      MullerSuperBold18: string,
      MullerBold12: string,
    },
    gradients: {
      default: string;
    },
    consts: {
      layoutWidth: string,
      marginLeft: string,
    },
    mediaQueries: {
      mobile: string,
      tablet: string,
      computer: string,
      desktop: string,
      hdPlus: string,
      wideScreen: string,
      superWideScreen: string;
    }
  }
}