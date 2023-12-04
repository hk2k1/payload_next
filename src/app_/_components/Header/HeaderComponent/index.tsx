'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload-types'
// import { noHeaderFooterUrls } from '../../../constants'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  const pathname = usePathname()
  // console.log(header)
  return (
    // <nav
    //   className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
    //     .filter(Boolean)
    //     .join(' ')}
    // >
    <nav className={classes.header}>
      <Gutter className={classes.wrap}>
        {/* <Link href="/">
          <Image src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-dark.svg" alt="logo" width={170} height={50} />
        </Link> */}
        <Link href="https://payloadcms.com" target="_blank" rel="noopener noreferrer">
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
              />
              <img
                className={classes.logo}
                alt="Payload Logo"
                src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-dark.svg"
              />
            </picture>
          </Link>
        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
  // return(
  //   <header className={classes.header}>
  //       <Gutter className={classes.wrap}>
  //         <Link href="/">
  //           <img
  //             className={classes.logo}
  //             alt="Payload Logo"
  //             src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-dark.svg"
  //           />
  //         </Link>
  //         <HeaderNav header={header} />
  //       </Gutter>
  //     </header>
  // )
}

export default HeaderComponent
