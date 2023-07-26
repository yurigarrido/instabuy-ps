import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxWidth: '118rem',
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  flexWrap: 'wrap',
  gap: '$10',

  margin: '$10 auto',
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
