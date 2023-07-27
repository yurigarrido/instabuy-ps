import { keyframes, styled } from '../../../../../../stitches.config'

export const ProductContainer = styled('div', {
  display: 'flex',
  gap: '$6',
  position: 'relative',

  background: '$white',

  padding: '$8 $10 $8 $8',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',

    p: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    width: '80%',
  },

  borderBottom: '1px solid $gray2',
})
export const QuantityControl = styled('div', {
  display: 'none',

  position: 'absolute',
  alignItems: 'center',

  padding: '$2',

  border: '1px solid $gray2',

  background: '$gray1',
  borderRadius: '$md',

  div: {
    width: '$10',
    textAlign: 'center',
  },

  variants: {
    visible: {
      true: {
        display: 'flex',
      },
    },
  },
})

export const QuantityButton = styled('button', {
  padding: '$2',
  borderRadius: '$md',

  border: '1px solid $gray2',
  background: '$white',
})

export const ActionsContainer = styled('div', {
  display: 'flex',
  gap: '$6',
})

export const RemoveProductButton = styled('button', {
  position: 'absolute',
  top: '$4',
  right: '$4',

  padding: '$2',

  color: '$danger1',
  fontWeight: 'bold',

  background: 'transparent',
  border: 'none',
  borderRadius: '$full',

  transition: 'background .3s ease',

  '&:hover': {
    background: '$danger1',
    color: '$white',
  },
})

export const Image = styled('img', {
  width: '64px',
  objectFit: 'contain',
  height: '121px',
})
