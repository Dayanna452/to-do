import styled from 'styled-components'
import { ButtonProps, StyledButtonProps } from './button.interface'

export const Button = ({...props}:ButtonProps) => {
  return (
    <StyledButton {...props}/>
  )
}

const StyledButton = styled.button<StyledButtonProps>`
border: ${({variant}) => variant === 'primary' ? 'none' : '1px solid black'};
background-color: ${({variant,theme}) => theme.colors[variant || 'primary']};
`