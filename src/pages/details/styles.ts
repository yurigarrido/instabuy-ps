import { Button } from '@/shared/components/button'
import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: 'calc(100vw - 4rem)',

  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$6',

  margin: '$10 auto',

  '@bigdesktop': {
    maxWidth: '150rem',
  },
})

export const Content = styled('div', {
  padding: '$10',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  width: '100%',

  background: '$white',

  borderRadius: '$md',
})

export const Grid = styled('div', {
  padding: '$10',
  width: '100%',
  background: '$white',
  borderRadius: '$md',

  gap: '$10',

  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 2fr))',
})

export const FlexContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',

  img: {
    height: '572px',
    objectFit: 'contain',

    '@mobile': {
      height: '200px',
    },
  },
})

export const CartControl = styled(FlexContainer, {
  gap: '$10',
  justifyContent: 'space-between',

  [`> ${Button}`]: {
    opacity: '.5',
  },
})

export const NotFoundProduct = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
  width: '100%',

  img: {
    maxWidth: '40rem',
  },
})
