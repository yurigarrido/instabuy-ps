import { keyframes, styled } from '../../../../stitches.config'

const pulseAnimation = keyframes({
  from: {
    transform: 'translate(-50%, -50%)',
  },
  to: {
    width: 'calc(100% + 1.5rem)',
    height: 'calc(100% + 1.5rem)',
    opacity: 0,
  },
})

export const Container = styled('button', {
  display: 'flex',
  gap: '1.4rem',
  alignItems: 'center',
  zIndex: 3,
  justifyContent: 'center',
  position: 'relative',
  '&&height': '4.8rem',
  minHeight: '$$height',
  border: 'none',
  fontFamily: '$sans',
  fontSize: '$base',
  fontWeight: '400',
  padding: '.8rem 2rem',
  color: '$$color',
  backgroundColor: 'transparent',
  '*': {
    flexShrink: '0',
  },
  '&:after': {
    opacity: 0,
    display: 'block',
    zIndex: -2,
    backgroundColor: 'transparent',
  },
  '&:hover:not(&:disabled)': {
    '&:before, &:after': {
      width: 'calc(100% + .3rem)',
      height: 'calc(100% + .3rem)',
    },
  },
  '&:active': {
    '&:before, &:after': {
      width: 'calc(100% - .4rem)',
      height: 'calc(100% - .4rem)',
    },
  },
  '&:focus': {
    '&:before, &:after': {
      width: 'calc(100% - .1rem)',
      height: 'calc(100% - .1rem)',
      filter: 'brightness(.9)',
    },
    '&:after': {
      opacity: 0.7,
      animationName: pulseAnimation,
      animationDelay: '.1s',
      animationDuration: '.3s',
      animationTimingFunction: 'linear',
    },
  },
  '&:after, &:before': {
    content: '',
    display: 'block',
    top: '50%',
    left: '50%',
    transition: 'all .2s ease-out',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    backgroundColor: '$$background',
    borderRadius: '$sm',
    height: '100%',
    width: '100%',
  },
  '&:before': {
    willChange: 'width, height',
    zIndex: -1,
  },
  '&:disabled': {
    $$background: '$colors$gray4',
    border: 'none',
    cursor: 'not-allowed',
  },
  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
    alignContent: {
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
      space: {
        span: {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
        },
      },
    },
    color: {
      green: {
        $$background: '$colors$green2',
        $$color: 'white',
      },
      white: {
        $$background: '$colors$white',
        $$color: 'black',

        '&:hover': {
          $$background: '$colors$blue1',
        },
      },
      red: {
        $$background: '$colors$danger1',
        $$color: 'white',
      },
      gray: {
        $$background: '$colors$gray2',
        $$color: 'black',

        '&:hover': {
          $$background: '$colors$gray2',
        },
      },
      orange: {
        $$background: '$colors$orange',
        $$color: 'white',
      },
    },
    size: {
      lg: {
        $$height: '4.8rem',
      },
      sm: {
        $$height: '3.4rem',
      },
    },
    fill: {
      outlined: {
        color: '$$background',
        '&:before, &:after': {
          outline: '1px solid $$background',
          backgroundColor: 'transparent',
        },
      },
      solid: {
        '&:before, &:after': {
          backgroundColor: '$$background',
          color: '$$color',
        },
      },
    },
    font: {
      rounded: {
        fontFamily: '$rounded',
      },
      sans: {
        fontFamily: '$sans',
      },
    },
    weight: {
      bold: {
        fontWeight: '700',
      },
      normal: {
        fontWeight: '400',
      },
    },
    circle: {
      true: {
        '&:after, &:before': {
          borderRadius: '$full',
        },
      },
    },
  },
})

export const Loading = styled('div', {})
