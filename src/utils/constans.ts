//Components
export const getSize = (size: string): string => {
  const sizes: { [key: string]: string } = {
    small: '8px 16px',
    medium: '12px 24px',
    large: '16px 32px'
  }
  return sizes[size]
}

export const getShape = (shape: string): string => {
  const shapes: { [key: string]: string } = {
    square: '0px',
    rounded: '8px',
    circle: '50%'
  }
  return shapes[shape]
}