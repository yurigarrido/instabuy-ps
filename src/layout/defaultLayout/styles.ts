import { styled } from '../../../stitches.config'

export const LayoutCountainer = styled('div', {
  width: '100%',

  backgroundColor: '$blue1',

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
