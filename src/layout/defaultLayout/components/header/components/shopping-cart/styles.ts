import * as Portal from '@radix-ui/react-portal'
import { keyframes, styled } from '../../../../../../../stitches.config'

export const Container = styled(Portal.Root, {
  height: '100%',
  width: '100vw',
  background: 'rgba(0, 0, 0, 0.133)',

  position: 'fixed',
  top: '0',
  zIndex: '$portal',
  opacity: '1',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',
})

const SlideIn = keyframes({
  from: { right: '-500px' },
  to: { right: '0px' },
})

const SlideOut = keyframes({
  from: { right: '0px' },
  to: { right: '-500px', display: 'none' },
})

export const Cart = styled('div', {
  position: 'absolute',
  right: '0',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',
  background: '$blue1',

  width: '45rem',

  '@mobile': {
    width: '100vw',
  },

  variants: {
    closed: {
      true: {
        animation: `${SlideOut} .5s ease`,
      },
      false: {
        animation: `${SlideIn} .5s ease`,
      },
    },
  },
})

export const Heading = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '$8',

  height: '$30',

  borderBottom: '1px solid $gray2',
})

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',

  overflowY: 'scroll',
  overflowX: 'hidden',
})

export const Footer = styled('div', {
  padding: '$8 $8 $2',
})
