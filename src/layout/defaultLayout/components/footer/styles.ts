import { styled } from '../../../../../stitches.config'

export const Container = styled('footer', {
  width: '100%',
  backgroundColor: '$background',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@mobile': {
    marginBottom: '5rem',
  },
})

export const Wrapper = styled('div', {
  display: 'flex',
  gap: '$12',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: 'calc(100vw - 4rem)',

  padding: '$12 0',

  '@bigdesktop': {
    maxWidth: '150rem',
  },
})

export const AboutContainer = styled('div', {
  width: '100%',

  display: 'grid',
  gridGap: '$12',
  gridTemplateColumns: 'repeat(auto-fill, 300px)',
  justifyContent: 'space-between',
})

export const DescriptionContainer = styled('div', {
  padding: '$12 0',

  borderTop: '2px solid $blue1',
  borderBottom: '2px solid $blue1',

  display: 'flex',
  flexDirection: 'column',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  gap: '$4',
})
