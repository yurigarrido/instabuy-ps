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

  borderRadius: '$md',

  padding: '$8',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
  height: '30rem',
  width: '22rem',
  borderRadius: '$md',
})

export const Title = styled('div', {
  width: '30rem',
  height: '4rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  borderRadius: '$md',
})

export const Banner = styled('div', {
  width: '100%',
  height: '31rem',
  animation: `${shimmerAnimation} 2s infinite `,
  background: '$gray2',
  borderRadius: '$md',
})
