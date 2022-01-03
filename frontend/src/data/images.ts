import neighborhoodPortrait from '../images/neighborhood-portrait.jpg'
import algonquinPortrait from '../images/algonquin-portrait.jpg'
import boston from '../images/boston.jpg'
import algonquinPanoramic from '../images/algonquin-canoeing.jpg'
import ibanezGuitar from '../images/ibanez-artcore-ag95-guitar.jpg'

export type ImageListImage = {
  img: string
  title: string
  tooltip?: string
  cols: number
  rows?: number
}

const images = [
  {
    img: neighborhoodPortrait,
    title: 'Portrait',
    cols: 2,
  },
  {
    img: algonquinPortrait,
    title: 'Algonquin portage trip',
    tooltip:
      'On our July 2021 Algonquin portage trip that I did with some good friends. Beautiful scenery and long portages abound!',
    cols: 2,
    rows: 2,
  },
  {
    img: boston,
    title: '2018 trip to Boston',
    tooltip:
      'I could see myself living in America some day... I visited Boston in 2018 and found it so interesting to walk through and explore for my second time.',
    cols: 2,
  },
  {
    img: algonquinPanoramic,
    title: 'Canoeing in Algonquin',
    tooltip:
      'An amazing sunset that we captured during an evening canoe ride this summer in Algonquin.',
    cols: 3,
  },
  {
    img: ibanezGuitar,
    title: 'My Ibanez guitar',
    tooltip:
      'I like to listen to and play jazz music, and am often found playing my Ibanez AG95 semi-hollow body guitar. With thick flat-wound strings on, it sounds amazing.',
    rows: 1,
    cols: 1,
  },
]

export default images
