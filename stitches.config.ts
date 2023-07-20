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
      danger1: '#D72B48',
      exit: '#FF1F1F'
    },
    space: {
      1: '.8rem',
      2: '1.6rem',
      3: '2.4rem',
      4: '3.2rem'
    },
    sizes: {
      1: '.4rem',
      2: '.8rem',
      3: '1rem',
      4: '1.4rem',
      5: '1.6rem',
      6: '1.8rem',
      7: '2.4rem',
      8: '3.2rem',
      9: '3.4rem',
      header: '10rem',
      sidebar: '6.4rem'
    },
    fontSizes: {
      base: '1.4rem',
      1: '1rem',
      2: '1.2rem',
      3: '1.4rem',
      4: '1.6rem',
      5: '1.8rem',
      6: '2.1rem',
      7: '2.4rem'
    },
    lineHeights: {
      1: '1.3',
      2: '1.5',
      3: '1.8'
    },
    borderWidths: {
      1: '.1rem',
      2: '.2rem'
    },
    radii: {
      1: '.4rem',
      2: '.8rem'
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
    outlineColor: '$primary1',
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
