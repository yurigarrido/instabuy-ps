import { styled } from '../../../stitches.config'

export const Container = styled('div', {
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

export const Heading = styled('div', {
  display: 'flex',
  marginBottom: '$10',
  alignItems: 'center',
  gap: '$4',

  svg: {
    color: '$orange',
  },
})

export const CarrouselContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$8 0',
  borderRadius: '$md',

  width: '100%',

  [` > ${Heading}`]: {
    paddingLeft: '$8',
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

export const BannerImg = styled('img', {
  objectFit: 'contain',
  borderRadius: '$md',
  height: '38rem',
})

export const EmptyList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  alignItems: 'center',
  width: '100%',

  img: {
    maxWidth: '40rem',
  },
})
