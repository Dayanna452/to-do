import { Button } from '../../atoms/Button'
import { Checkbox } from '../../atoms/Checkbox'
import { Container } from '../../atoms/Container'
import { List } from '../../molecules/List'
import { Modal } from '../../organisms/Modal/modal.component'

export const Board = () => {
  return (
    <Container>
      <List>
        <Checkbox content='nuevo item' />
        <Button variant='secondary' shape='circle'>
          +
        </Button>
      </List>
      <Modal>modal</Modal>
    </Container>
  )
}
