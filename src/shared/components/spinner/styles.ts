import { keyframes, styled } from '../../../../stitches.config'

const scaleAnimation = keyframes({
  from: {
    opacity: 0,
    width: 0,
    height: 0,
  },
  to: {
    opacity: 1,
    width: '1em',
    height: '1em',
  },
})

const spinnerAnimation = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
})

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  maxHeight: 'fit-content',
  width: '100%',
  color: 'inherit',
  span: {
    display: 'inline-block',
    width: '1em',
    height: '1em',
    border: '.14em solid currentColor',
    borderBottomColor: 'transparent',
    borderRadius: '100%',
    animation: `${spinnerAnimation} .8s ease infinite, ${scaleAnimation} .1s linear`,
  },
  variants: {
    position: {
      left: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },
})
