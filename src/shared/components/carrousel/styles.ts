import { styled } from '../../../../stitches.config'
import { Button } from '../button'

export const Container = styled('div', {
  backgroundColor: '$white',
  maxWidth: '118rem',
  margin: '0 auto',
  borderRadius: '$md',

  padding: '$4 0',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  boxSizing: 'border-box',
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
