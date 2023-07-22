import { styled } from '../../../../stitches.config'

export const Container = styled('header', {
  width: '100%',
  backgroundColor: '$white',

  height: '$header',

  position: 'fixed',
  top: '0',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  zIndex: '$header',
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '$12',

  maxWidth: '118rem',
  width: '100%',
})

export const Logo = styled('img', {
  height: '64px',
  width: '64px',

  objectFit: 'cover',
})

export const SearchBar = styled('div', {
  display: 'flex',

  input: {
    height: '$16',
    width: '40rem',

    padding: '$4',
  },
})

export const FlexContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',
})
