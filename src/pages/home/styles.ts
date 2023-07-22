import { styled } from '../../../stitches.config'

export const Container = styled('div', {
  maxWidth: '118rem',
  width: '100%',

  padding: '$12',

  margin: '0 auto',

  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '$4',
})

export const Product = styled('div', {
  backgroundColor: '$white',
  width: '20rem',

  padding: '$8',
  borderRadius: '$md',

  img: {
    width: '160px',
    objectFit: 'cover',
    marginBottom: '$8',
  },
})
