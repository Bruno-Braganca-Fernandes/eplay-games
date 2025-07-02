import ProductList from '../../components/ProductsList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'Windows',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    image: resident,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Resident Evil 4'
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    system: 'PC, PS5',
    title: 'Resident Evil 4'
  },
  {
    id: 4,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror',
    image: resident,
    infos: ['5%', 'R$ 290,00'],
    system: 'PS5',
    title: 'Resident Evil 4'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment.',
    image: diablo,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Diablo IV'
  },
  {
    id: 6,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment.',
    image: zelda,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Zelda'
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment.',
    image: starWars,
    infos: ['17/05'],
    system: 'Windows',
    title: 'Star Wars'
  },
  {
    id: 8,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard Entertainment.',
    image: resident,
    infos: ['17/05'],
    system: 'Nintendo Switch',
    title: 'Resident Evil 4'
  }
]

const Categories = () => (
  <>
    <ProductList games={promocoes} title="RPG" background="gray" />
    <ProductList games={emBreve} title="Ação" background="black" />
    <ProductList games={promocoes} title="Aventura" background="gray" />
    <ProductList games={emBreve} title="FPS" background="black" />
  </>
)

export default Categories
