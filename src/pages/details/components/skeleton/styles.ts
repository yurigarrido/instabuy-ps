import { keyframes, styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  marginTop: '15rem',

  maxWidth: 'calc(100vw - 4rem)',
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$10',

  margin: '2rem',

  '@bigdesktop': {
    margin: '$8 auto',
    maxWidth: '150rem',
  },
})

export const FlexContainer = styled('div', {
  width: '100%',

  backgroundColor: '$white',

  borderRadius: '$md',

  padding: '$8',

  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '$10',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
    },
    overflow: {
      hidden: {
        true: {
          flexWrap: 'nowrap',
          overflow: 'hidden',
        },
      },
    },
  },
})

const shimmerAnimation = keyframes({
  'from, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.2,
  },
})

export const Card = styled('div', {
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  height: '64rem',
  width: '50%',
  borderRadius: '$md',

  '@mobile': {
    width: '100%',
    height: '33rem',
  },
})

export const TextContainer = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Title = styled('div', {
  width: '100%',
  height: '4rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  borderRadius: '$md',

  variants: {
    size: {
      sm: {
        width: '20rem',
      },
      md: {
        width: '40rem',
      },
      lg: {
        width: '100%',
      },
    },
  },
})

export const Banner = styled('div', {
  width: '100%',
  height: '31rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  borderRadius: '$md',
})
