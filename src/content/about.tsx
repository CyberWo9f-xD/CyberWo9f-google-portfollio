import { ComponentProps } from 'react'
import { Friend, SocialProfile } from 'src/components'
import {
  bryanLiu,
  dwayneJohnson,
  github,
  instagram,
  jeffZhao,
  jodiJang,
  linkedin,
  youtube,
} from './b64'

type Profile = ComponentProps<typeof SocialProfile>

export const profiles: Profile[] = [
  {
    label: 'GitHub',
    url: 'https://www.github.com/CyberWo9f-xD',
    src: github,
  },
  {
    label: 'YouTube',
    url: 'https://youtube.com/channel/UC6dut7RS0eXF4-FsiI7BZnQ/',
    src: youtube,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/CyberWo9f/',
    src: linkedin,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/3ncrypt3d_.cyb3rwo9f._/',
    src: instagram,
  },
]

type Friends = ComponentProps<typeof Friend>[]

export const friends: Friends = [
  {
    src: dwayneJohnson,
    name: 'Pari Chauhan',
    label: 'Future',
    url: 'https://www.google.com/search?q=Pari+Chauhan+Rajput',
  },
  {
    src: jodiJang,
    name: 'Abhishek Yaduwansi',
    label: 'Brother',
    url: 'https://www.facebook.com/adityaroy.adityaroy.18041/',
  },
  {
    src: bryanLiu,
    name: 'Ashutosh Tiwari',
    label: 'Friend',
    url: 'https://www.facebook.com/aashutosh.tiwari.104',
  },
  {
    src: jeffZhao,
    name: 'Aakash Yaduwansi',
    label: 'Son',
    url: 'https://www.facebook.com/sky.yadav.7509836',
  },
]
