import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: {
        white100: string,
        white70: string,
        white50: string,
        // hover: string,
        // active: string,
      }
      darkBlue: string,
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
    }
  }
}