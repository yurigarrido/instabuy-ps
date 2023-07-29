import { styled } from '../../../../../stitches.config'

export const Wrapper = styled('div', {
  position: 'fixed',
  zIndex: '$header',
  top: '0',

  backgroundColor: '$white',
  borderBottom: '1px solid $gray2',

  width: '100%',
})

export const Header = styled('header', {
  width: '100%',

  padding: '$8 0',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '$8',

  '@bigdesktop': {
    margin: '0 auto',
    maxWidth: '150rem',
  },

  '@mobile': {
    width: '100vw',
    flexDirection: 'column',
  },
})

export const SearchBar = styled('form', {
  flex: 1,

  position: 'relative',

  input: {
    height: '$16',
    flex: '1',
    width: '100%',
    minWidth: '200px',

    padding: '$4',
  },

  button: {
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    cursor: 'pointer',

    border: 'none',
    backgroundColor: 'transparent',

    '&:hover': {
      color: '$orange',
    },
  },

  '@mobile': {
    input: {
      width: 'calc(100vw - 4rem)',
    },
  },
})

const FlexContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  '@mobile': {
    flex: 1,
    width: '100%',
  },

  '@tablet': {
    flex: 1,
    width: '100%',
  },
})

export const ButtonsContainer = styled(FlexContainer, {
  justifyContent: 'space-between',

  '@mobile': {
    position: 'fixed',
    bottom: '0',

    padding: '$8',
    backgroundColor: '$white',

    borderTop: '1px solid $gray2',
  },
})
export const LogoContainer = styled(FlexContainer, {
  cursor: 'pointer',
  '@mobile': {
    justifyContent: 'center',
  },
})

export const Logo = styled('img', {
  height: '64px',
  width: '64px',

  objectFit: 'cover',
})

export const CartCount = styled('div', {
  position: 'absolute',

  top: '-6px',
  right: '-6px',

  backgroundColor: '$danger1',
  height: '$10',
  width: '$10',
  borderRadius: '$full',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$white',
  fontWeight: 'bold',
})
