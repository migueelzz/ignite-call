import { styled } from '@ignite-ui/react'

export const Container = styled('header', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  marginLeft: 'auto',
  padding: '$8',

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',
    width: '100%',
    textDecoration: 'none',
  },
})
