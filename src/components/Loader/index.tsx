import { PacmanLoader } from 'react-spinners'
import { Container } from './styles'
import { colors } from '../../styles'

export default function Loader() {
  return (
    <Container>
      <PacmanLoader color={colors.pink} />
    </Container>
  )
}
