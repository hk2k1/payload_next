{
  /* eslint-disable @next/next/no-img-element */
}

import React from 'react'
import Link from 'next/link'

import { Header } from '../../../payload-types'
import { fetchHeader } from '../../_api/fetchGlobals'
import HeaderComponent from './HeaderComponent'
import { ThemeSelector } from '../../_providers/Theme/ThemeSelector'
export async function Header() {
  let header: Header | null = null

  try {
    header = await fetchHeader()
  } catch (error) {
    console.log('HEADER ERROR');
    console.log(error)
  }

  return (
    <>
      <HeaderComponent header={header} />
    </>
  )
}
