import { styled } from '../../../stitches.config'

export const LayoutCountainer = styled('div', {
  height: '100vh',
  width: '100%',

  // backgroundColor: '$blue1',
  backgroundColor: '$black6',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  height: '100%',

  marginTop: '$sizes$header',
})
