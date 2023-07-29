import { styled } from '../../../../../stitches.config'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - 4rem)',
  width: '100%',
  overflow: 'hidden',

  display: 'flex',
  justifyContent: 'start',
  flexWrap: 'nowrap',
  overlow: 'hidden',
  gap: '$4',

  '@bigdesktop': {
    margin: '$4 auto',
    maxWidth: '150rem',
  },
})

export const NavBar = styled('nav', {
  padding: '$2',

  width: '100%',
  backgroundColor: '$white',

  borderBottom: '1px solid $gray2',

  '@mobile': {
    display: 'none',
  },

  '@tablet': {
    display: 'none',
  },

  '@desktop': {
    display: 'initial',
  },
})
