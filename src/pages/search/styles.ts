import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  width: 'calc(100vw - 4rem)',
  overflow: 'hidden',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '$10',

  margin: '$10 auto',

  '@bigdesktop': {
    maxWidth: '150rem',
  },
})

export const InformationsContainer = styled('div', {
  alignSelf: 'flex-start',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const ProductsView = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

  backgroundColor: '$white',
  padding: '$8',
  borderRadius: '$md',

  width: '100%',
})

export const FlexContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  flexDirection: 'row',
  gap: '$6',
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

  img: {
    maxWidth: '40rem',
  },
})
