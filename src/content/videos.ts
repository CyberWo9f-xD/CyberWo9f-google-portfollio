import { ComponentProps } from 'react'
import { VideoResult } from 'src/components'

type Video = ComponentProps<typeof VideoResult>

export const videos: Video[] = [
  {
    title: 'TryHackMe - Vulnversity Walkthrough',
    id: 'VoY2ERH08Bs',
    description: `In this video, I will be taking you through the Vulnversity challenge on TryHackMe. We will go through the process of reconnaissance, web application exploitation, and Linux privilege escalation.`, 

    Source code: https://github.com/CyberWo9f-xD/backend-2022
    
    Learn more about NestJS: https://nestjs.com/
    Learn more about Prisma: https://www.prisma.io/
    Learn more about GraphQL: https://graphql.org/
    
    For the background music, check out: https://www.youtube.com/channel/CyberWo9f-xD`,
    uploadDate: 'July 11, 2022',
  },
  {
    title: 'FREE Advanced BURPSUITE Mini COURSE',
    id: '7wtisgnd_i4',
    description: `Useful tips for using Burpsuite like PRO`,
    uploadDate: 'Oct 11, 2022',
  },
  {
    title: 'How "POLICE" Analyse HACKER Program',
    id: 'fb8aLrLyyp4',
    description: `How Police reverse engreeing Any Apk To Track Vicimts?,`,
    uploadDate: 'Nov 3, 2020',
  },
  {
    title: 'WHY Your "Antivirus" NOT Detected 0/26',
    id: 'atrSAYvyiqQ',
    description: `Advanced method for making FUD in 2022,. How hackers Bypass any Antivirus?`,
    uploadDate: 'Oct 17, 2020',
  },
  {
    title: 'Dont make mistake full time Bug Hunter',
    id: 'adrfP31J4-w',
    description: `Advanced Level Method to Hunt AnySites.`,
    uploadDate: 'Aug 3, 2020',
  },
  {
    title: 'How Hackers Earn MONEY',
    id: 'vk8tKHRjeg0',
    description: `In this video i give you knowledge About how hackers earn Money. 

    Today we explore some of the ways we can use array destructuring to our benefit. 
    
    
    To learn more about object destructuring check out: https://youtube.com/channel/UC6dut7RS0eXF4-FsiI7BZnQ
    `,
    uploadDate: 'June 19, 2020',
  },
  {
    title: 'How To Install Garuda Linux On Android Mobile? Run Garuda Linux On Android',
    id: 'VHZpHQU_fXY',
    description: `Install Garuda Linux On Android Mobile, Benifits of Garuda Linux. 

    Today we explore some of the ways we can use object destructuring to our benefit.`,
    uploadDate: 'June 10, 2020',
  },
  {
    title: 'AUTO-START App After Boot & Restart Phone',
    id: 'M4pze4wyoiY',
    description: `How to add auto restart wherever phne bootup code in any application.

    Source code: https://github.com/CyberWo9f-xD/deno-gra...
    Learn more about Deno: https://deno.land/
    Learn more about GraphQL: https://graphql.org/`,
    uploadDate: 'June 6, 2020',
  },
]
