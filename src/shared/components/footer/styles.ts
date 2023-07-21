import { styled } from "../../../../stitches.config";

export const Container = styled('footer', {
  width: '100%',
  backgroundColor: '$background',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const Wrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  maxWidth: '118rem',
  width: '100%',
})

export const AboutContainer = styled('div', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',


  border: '1px solid red'
})