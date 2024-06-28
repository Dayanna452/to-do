import { Colors } from '../../../types/global'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: Colors
  shape?: 'square' | 'rounded' | 'circle'
  size?: 'small' | 'medium' | 'large'
  border?: Colors
}

export type StyledButtonProps = Omit<ButtonProps, 'onClick'>
