import styled from "styled-components"

interface ModalProps{
  children: React.ReactNode
}

export const Modal = ({children}:ModalProps) => {
  return (
    <StyledModal>{children}</StyledModal>
  )
}

const StyledModal = styled.div`
  display: flex;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
`