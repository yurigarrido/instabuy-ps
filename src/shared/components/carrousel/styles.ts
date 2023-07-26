import { styled } from '../../../../stitches.config'
import { Button } from '../button'

export const Container = styled('div', {
  backgroundColor: '$white',
  margin: '0 auto',
  borderRadius: '$md',

  width: '100%',
  padding: '$4 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  boxSizing: 'border-box',

  '> .keen-slider': {
    padding: '$4 0',
  },
})

const CarrouselButton = styled(Button, {
  height: '5rem',
  width: '5rem',

  padding: '$4',

  position: 'absolute',

  border: 'none',
  backgroundColor: '$orange',
  color: '$white',

  alignSelf: 'center',
  borderRadius: '$full',

  '&:disabled': {
    opacity: '0.2',
  },
})

export const CarrouselButtonLeft = styled(CarrouselButton, {
  left: '$4',
})

export const CarrouselButtonRight = styled(CarrouselButton, {
  right: '$4',
})

export const Heading = styled('div', {
  padding: '$8',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  svg: {
    color: '$orange',
  },
})

export const Points = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

export const Point = styled('button', {
  border: 'none',
  width: '10px',
  height: '10px',
  background: '#c5c5c5',
  borderRadius: '50%',
  margin: ' 0 5px',
  padding: ' 5px',
  cursor: 'pointer',

  '&:focus': {
    outline: 'none',
  },

  variants: {
    active: {
      true: {
        background: '#000',
      },
    },
  },
})
