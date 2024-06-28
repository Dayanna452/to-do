import styled from 'styled-components'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <StyledBoard>{children}</StyledBoard>
}

const StyledBoard = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
`
