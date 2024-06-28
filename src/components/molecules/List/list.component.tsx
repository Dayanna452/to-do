import { Button } from '../../atoms/Button'
import { Checkbox } from '../../atoms/Checkbox'

export const List = () => {
  return (
    <>
      <Checkbox content='nuevo item' />
      <Button variant='secondary' shape='circle'>+</Button>
    </>
  )
}
