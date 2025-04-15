export type menuDataT = {
  textHu: string;
  textDe: string;
  textEn: string;
  link: string;
  isHighlighted?: boolean;
}

export const menuData: menuDataT[] = [
  {
    textHu: 'Kezdőlap',
    textDe: 'Startseite',
    textEn: 'Home',
    link: '#top'
  },
  {
    textHu: 'Hammerschmidt',
    textDe: 'Hammerschmidt',
    textEn: 'Hammerschmidt',
    link: '#hammerschmidt'
  },
  {
    textHu: 'Művészek',
    textDe: 'Künstler',
    textEn: 'Artists',
    link: '#musicians'
  },
  {
    textHu: 'Koncertek',
    textDe: 'Konzerte',
    textEn: 'Concerts',
    link: '#concerts'
  },
  {
    textHu: 'Kapcsolat',
    textDe: 'Kontakt',
    textEn: 'Contact',
    link: 'mailto:info@hammerschmidt-consort.com',
    isHighlighted: true
  }
]