import { styled } from '../../../stitches.config'

export const LayoutCountainer = styled('div', {
  width: '100%',

  backgroundColor: '$blue1',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  variants: {
    hidden: {
      true: {
        maxHeight: '100vh',
        overflow: 'hidden',
      },
    },
  },
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',

  marginTop: '$sizes$header',

  '@mobile': {
    marginTop: '17rem',
  },
})
