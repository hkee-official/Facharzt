import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'


const config: DocsThemeConfig = {
  logo: <span className='flex'><svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7452 12.1705L30.8185 13.6485L34.0987 22.2273C34.7081 22.0788 35.3448 22 36 22C40.4183 22 44 25.5817 44 30C44 34.4183 40.4183 38 36 38C31.5817 38 28 34.4183 28 30C28 26.9446 29.7128 24.2893 32.2307 22.9419L30.583 18.6327L24.901 30.4338C24.7343 30.78 24.3842 31 24 31H19.9381C19.446 34.9463 16.0796 38 12 38C7.58172 38 4 34.4183 4 30C4 25.5817 7.58172 22 12 22C16.0796 22 19.446 25.0537 19.9381 29H22.4381L17.5583 15.3363C17.5186 15.2252 17.4997 15.1116 17.4997 15H16C15.4477 15 15 14.5523 15 14C15 13.4477 15.4477 13 16 13H20.5C21.0523 13 21.5 13.4477 21.5 14C21.5 14.5523 21.0523 15 20.5 15H19.5619L21.4038 20.1574L29.5306 15.8802L28.5659 13.3572C28.4667 13.0975 28.48 12.8082 28.6026 12.5587C28.7253 12.3093 28.9464 12.1221 29.2127 12.0422L35.1705 10.2549L35.7452 12.1705ZM22.0833 22.0599L24.055 27.5807L28.2846 18.7961L22.0833 22.0599ZM35.0659 30.3572L32.9527 24.8303C31.1854 25.8743 30 27.7987 30 30C30 33.3137 32.6863 36 36 36C39.3137 36 42 33.3137 42 30C42 26.6863 39.3137 24 36 24C35.5964 24 35.202 24.0399 34.8208 24.1158L36.9341 29.6429C37.1313 30.1588 36.873 30.7369 36.3571 30.9341C35.8413 31.1314 35.2632 30.8731 35.0659 30.3572ZM17.917 29H12C11.4477 29 11 29.4477 11 30C11 30.5523 11.4477 31 12 31H17.917C17.441 33.8377 14.973 36 12 36C8.68629 36 6 33.3137 6 30C6 26.6863 8.68629 24 12 24C14.973 24 17.441 26.1623 17.917 29Z" fill="#333333"/>
  </svg><div className='relative flex mt-3'>Facharzt Pädiatrie</div></span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/hkee-official/Facharzt/tree/main/',
  footer: {
    text: 'Nextra Docs Template',
  },
  editLink: {
    text: `Diese Seite bearbeiten`},
    sidebar: {
      defaultMenuCollapseLevel: 0,
    },
    toc: {
      title: 'Inhaltsverzeichnis dieser Seite'
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Facharzt" />
        <meta property="og:description" content="The next site builder" />
      </>
    ),
}

export default config
