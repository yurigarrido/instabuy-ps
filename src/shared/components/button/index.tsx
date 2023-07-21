import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Spinner } from '../spinner'
import * as S from './styles'

import React, { ComponentProps } from 'react'
import { Container } from './styles'

export type ButtonProps = Omit<ComponentProps<typeof Container>, 'css'> & {
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
  loading?: boolean
  contextId?: string
  full?: boolean
}


const ButtonFC: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    alignContent = 'center',
    color = 'primary',
    size = 'sm',
    weight = 'normal',
    font = 'sans',
    children,
    loading,
    leftIcon,
    full,
    rightIcon,
    contextId,
    ...props
  },
  ref
) => {
  return (
    <S.Container
      color={color}
      size={size}
      ref={ref}
      full={full}
      weight={weight}
      font={font}
      alignContent={alignContent}
      data-testid={contextId}
      data-cy={contextId}
      {...props}
    >
      {leftIcon}

      <span data-testid={`${contextId}Label`} data-cy={`${contextId}Label`}>
        {children}
      </span>

      {rightIcon}

      {loading && (
        <S.Loading
          data-testid={`${contextId}Loader`}
          data-cy={`${contextId}Loader`}
        >
          <Spinner />
        </S.Loading>
      )}
    </S.Container>
  )
}

export const Button = forwardRef(ButtonFC)
