import styled from 'styled-components'
import { ButtonProps, StyledButtonProps } from './button.interface'
import { getShape, getSize } from '../../../utils/constans'

export const Button = ({ ...props }: ButtonProps) => {
  return <StyledButton {...props} />
}

const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ size }) => (size ? getSize(size) : '4px 9px')};
  border: ${({ theme, border }) =>
    border ? `1px solid ${theme.colors[border]}` : 'none'};
  border-radius: ${({ shape }) => getShape(shape || 'rounded')};
  background-color: ${({ variant, theme }) =>
    theme.colors[variant || 'primary']};
`
