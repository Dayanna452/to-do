import styled from 'styled-components'
import { CheckboxProps } from './checkbox.interface'

export const Checkbox = ({content, ...props }: CheckboxProps) => {
  return (
    <StyledCheckbox {...props}>
      <input type='checkbox' />
      <span>{content}</span>
    </StyledCheckbox>
  )
}

const StyledCheckbox = styled.div`
display: flex;
align-items: center;
gap: 5px;
`
