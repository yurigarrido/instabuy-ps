import { Button } from '@/shared/components/button'
import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxWidth: '118rem',
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$6',

  margin: '$10 auto',
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
