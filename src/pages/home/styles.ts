import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxWidth: '118rem',
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$10',

  margin: '$10 auto',
})

export const CarrouselContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$12 0',
  borderRadius: '$md',
})

export const Heading = styled('div', {
  display: 'flex',
  marginBottom: '$10',
  alignItems: 'center',
  gap: '$4',

  svg: {
    color: '$orange',
  },
})

export const Product = styled('div', {
  backgroundColor: '$white',
  miWidth: '270px',

  padding: '$8',
  borderRadius: '$md',

  cursor: 'pointer',
  border: '1px solid $white',

  img: {
    width: '160px',
    objectFit: 'cover',
    marginBottom: '$8',
  },

  '&:hover': {
    transition: '.3s border ease',
    border: '1px solid $orange',
    '-webkit-box-shadow': ' 0px 0px 10px 0px rgba(0,0,0,0.25)',
    '-moz-box-shadow': ' 0px 0px 10px 0px rgba(0,0,0,0.25)',
    'box-shadow': '0px 0px 10px 0px rgba(0,0,0,0.25)',
  },
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
