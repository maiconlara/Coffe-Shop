import { extendTheme } from 'native-base'

export const fonts = extendTheme({
  fontConfig: {
    Urbanist: {
      500: {
        normal: 'Urbanist_400Regular',
      },
      700: {
        normal: 'Urbanist_700Bold',
      },
    },
  },

  fonts: {
    text: 'Urbanist',
  },
})