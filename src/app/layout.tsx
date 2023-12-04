import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from './_components/Header'
import favicon from './aws_CF_Athena.png'

import './_css/app.scss'
import { Providers } from './_providers'
import { InitTheme } from './_providers/Theme/InitTheme'

// import classes from './layout.module.scss'
import { AdminBar } from './_components/AdminBar'

const rubik = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Payload Custom Server',
  description: 'Serve Payload alongside any front-end framework.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <InitTheme />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={rubik.className}>
        <Providers>
        {/* <header className={classes.header}>
          <Link href="/" target="_blank" rel="noopener noreferrer">
            <picture>
              <img
                className={classes.logo}
                alt="Payload Logo"
                src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-dark.svg"
              />
            </picture>
          </Link>
        </header> */}

        {/* <AdminBar /> */}
        <Header />
        <main className='main'>
          {children}
        </main>
        </Providers>
      </body>
    </html>
  )
}
