import { styled } from '../../../../stitches.config'
import * as Portal from '@radix-ui/react-portal'

export const Container = styled(Portal.Root, {
  height: '100vh',
  width: '100vw',
  background: '$black6',
  color: '$white',

  position: 'fixed',
  top: '0',
  zIndex: '9999',
  opacity: '0.9',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignContent: 'center',

  div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$4',
    margin: '0 auto',
  },
})
