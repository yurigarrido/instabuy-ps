import { Button } from '@/shared/components/button'
import { keyframes, styled } from '../../../../stitches.config'

export const CartButton = styled(Button, {
  display: 'flex',

  position: 'absolute',
  top: '$2',
  right: '$2',

  width: '5rem',
  height: '5rem',
  borderRadius: '$full',

  border: '1px solid $gray2',
  '-webkit-box-shadow': ' 0px 0px 10px 0px rgba(0,0,0,0.25)',
  '-moz-box-shadow': ' 0px 0px 10px 0px rgba(0,0,0,0.25)',
  'box-shadow': '0px 0px 10px 0px rgba(0,0,0,0.25)',
})

export const Price = styled('div', {
  color: '$gray7',
  variants: {
    red: {
      true: {
        color: '$danger1',
        opacity: '0.8',
        textDecoration: 'line-through',
      },
    },
  },
})

export const PriceContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  gap: '$4',
})

export const Product = styled('div', {
  backgroundColor: '$white',
  width: '270px',

  position: 'relative',

  padding: '$8',
  borderRadius: '$md',

  cursor: 'pointer',
  border: '1px solid $white',

  '&:hover': {
    transition: '.3s border ease',

    [` > ${CartButton}`]: {
      display: 'flex',
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

export const shimmerCSS = {
  backgroundColor: '$gray2',
  animation: `${shimmerAnimation} 1.5s ease infinite`,
}

export const ImageSkeleton = styled('div', {
  position: 'absolute',
  top: '0px',

  height: '180px',
  width: '160px',
  borderRadius: '$md',
  animation: `${shimmerAnimation} 1.5s ease infinite`,
  background: '$gray2',
})

export const Image = styled('img', {
  width: '160px',
  objectFit: 'cover',
  marginBottom: '$8',

  variants: {
    loading: {
      true: {
        opacity: 0,
      },
    },
  },
})
