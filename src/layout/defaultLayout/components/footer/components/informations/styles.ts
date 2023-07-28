import { styled } from '../../../../../../../stitches.config'

export const Link = styled('a', {
  textDecoration: 'none',

  color: '$gray7',

  '&:hover': {
    textDecoration: 'underline',
  },
})

export const Contact = styled(Link, {
  display: 'flex',

  alignItems: 'center',
  gap: '$2',

  cursor: 'default',
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Grid = styled('div', {
  display: 'flex',

  variants: {
    row: {
      true: {
        flexDirection: 'row',
        gap: '$4',
      },
    },
  },
})

export const Logo = styled('img', {
  height: '26px',
  width: '26px',

  objectFit: 'cover',
})
