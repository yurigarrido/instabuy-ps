import { styled } from '../../../../stitches.config'

export const BreadcrumbsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  a: {
    textDecoration: 'none',
    color: '$gray7',

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  span: {
    color: '$gray7',
    cursor: 'default',
  },
})
