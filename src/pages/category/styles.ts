import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - 4rem)',
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  flexWrap: 'wrap',
  overlow: 'hidden',
  gap: '$4',

  margin: '$10 auto',

  '@bigdesktop': {
    margin: '$10 auto',
    maxWidth: '150rem',
  },
})

export const Content = styled('nav', {
  width: '100%',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '$6',
})

export const FiltersContainer = styled('div', {
  height: '40rem',
  minWidth: '30rem',

  background: '$white',

  padding: '$4',
  borderRadius: '$md',

  '@mobile': {
    flex: '1',
  },
})

export const ProductsWrapper = styled('div', {
  flex: '1',
  minWidth: '30rem',
  background: '$white',

  padding: '$4',
  borderRadius: '$md',
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
})

export const ButtonContainer = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const NotFound = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
  width: '100%',
  background: '$white',
  borderRadius: '$md',

  padding: '$8',

  img: {
    maxWidth: '40rem',
  },
})
