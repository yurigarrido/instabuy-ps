import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      background: '#FFFFFF',
      white: '#FFFFFF',
      text: '#383838',
      logoPrimary: '#383939',
      logoSecondary: '#49AF3E',
      primary1: '#49AF3E',
      primary2: '#3DB257',
      primary3: '#D0F4CC',
      primary4: '#E6F6E5',
      secondary1: '#F3F5F9',
      green1: "#B0DBA6",
      green2: "#43B02A",
      green3: "#399624",
      orange: "#FF7E00",
      danger1: '#D72B48',
      exit: '#FF1F1F',
      gray8: '#A2A4A4',
      gray7: '#515252',
      gray6: '#999999',
      gray5: '#A1A9B4',
      gray4: '#C4C4C4',
      gray3: '#D2D2D2',
      gray2: '#E5E5E5',
      gray1: '#FBFBFB',
      gray0: '#f1f1f1',
      blue1: '#F3F5F9',
      black6: '#1E1F1F',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
    },
    sizes: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      40: '10rem',
      64: '16rem',
      80: '20rem',
      header: '10rem',
      sidebar: '6.4rem'
    },
    fontSizes: {
      base: '1.4rem',
      xxs: '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '4xl': '2rem',
      '5xl': '2.25rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '4.5rem',
      '9xl': '6rem',
    },
    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
    },
    borderWidths: {
      1: '.1rem',
      2: '.2rem'
    },
    radii: {
      px: '1px',
      xs: '4px',
      sm: '6px',
      md: '8px',
      lg: '16px',
      full: '99999px',
    },
    fonts: {
      rounded: '"Quicksand", apple-system, sans-serif',
      sans: '"Open Sans", apple-system, sans-serif'
    },
    zIndices: {
      sidebar: 10,
      header: 15,
      popover: 20,
      samplesFooter: 5
    }
  },
  media: {
    mobile: '(max-width: 640px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
  }
})

export const globalStyles = globalCss({
  '@import':
    "url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Quicksand:wght@400;700&display=swap')",
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    outlineColor: '$orange',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },
  '#root, body': {
    minHeight: '100vh',
  },
  html: {
    fontFamily: '$sans',
    fontSize: '62.5%',

  },
  body: {
    fontSize: '1.6rem',
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
  },
  button: {
    cursor: 'pointer'
  },
  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%'
  },
  'input, button, textarea, select': {
    font: 'inherit',
    padding: 0,
    margin: 0
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word'
  },
  
})
