import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          category="Ação"
          system="Windows"
          description="Jogo de ação"
          infos={['-10%', 'R$ 150,00']}
          image="//place-hold.it/222x250"
          title="Nome do jogo"
        />
        <Product
          category="Aventura"
          system="Linux"
          description="Jogo de aventura"
          infos={['Singleplayer']}
          image="//place-hold.it/222x250"
          title="Nome do jogo"
        />
        <Product
          category="RPG"
          system="Mac"
          description="Jogo de RPG"
          infos={['Singleplayer', 'Co-op']}
          image="//place-hold.it/222x250"
          title="Nome do jogo"
        />
        <Product
          category="Estratégia"
          system="Windows"
          description="Jogo de estratégia"
          infos={['Multiplayer']}
          image="//place-hold.it/222x250"
          title="Nome do jogo"
        />
      </List>
    </div>
  </Container>
)

export default ProductList
