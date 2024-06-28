import { DefaultTheme } from "styled-components"

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  border?:DefaultTheme['colors']
}


export type StyledButtonProps = Omit<ButtonProps,'onClick'>