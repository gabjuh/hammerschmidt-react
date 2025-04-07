export type menuDataT = {
  text: string;
  link: string;
  isHighlighted?: boolean;
}

export const menuData: menuDataT[] = [
  {
    text: 'Kezdőlap',
    link: '#top'
  },
  {
    text: 'Hammerschmidt',
    link: '#hammerschmidt'
  },
  {
    text: 'Művészek',
    link: '#musicians'
  },
  {
    text: 'Koncertek',
    link: '#concerts'
  },
  {
    text: 'Kapcsolat',
    link: 'mailto:info@hammerschmidt-consort.com',
    isHighlighted: true
  }
]