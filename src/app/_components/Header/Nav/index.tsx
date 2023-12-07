'use client'

import React from 'react';
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload-types'
// import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
// import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

import { Theme, themeLocalStorageKey } from '../../../_providers/Theme/types'
import { useTheme } from '../../../_providers/Theme'
// import MoonIcon from '../../Icons/MoonIcon';
// import SunIcon from '../../Icons/SunIcon';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';


export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const selectRef = React.useRef<HTMLSelectElement>(null)
  const { theme, setTheme } = useTheme()
  const [show, setShow] = React.useState(false)
  console.log('THEME:', theme)
  const onThemeChange = (themeToSet: Theme & 'auto') => {
    if (themeToSet === 'auto') {
      setTheme(null)
      if (selectRef.current) selectRef.current.value = 'auto'
    } else {
      setTheme(themeToSet)
    }
  }

  React.useEffect(() => {
    const preference = window.localStorage.getItem(themeLocalStorageKey)
    console.log(themeLocalStorageKey, preference)
    if (selectRef.current) {
      console.log(selectRef)
      selectRef.current.value = preference ?? 'auto'
      setShow(true)
    }
  }, [])
  
  const navItems = header?.navItems || []
  // const { user } = useAuth()
  const user = false;
  console.log(theme)
  return (
    <nav className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      {/* <CartLink /> */}
      {user && <Link href="/account">Account</Link>}
      {!user && (
        <Button
          el="link"
          href="/login"
          label="Login"
          appearance="primary"
          onClick={() => (window.location.href = '/login')}
        />
      )}
      {user && true}
      <button
        className={classes.darkModeButton}
        onClick={e => onThemeChange(theme === 'light' ? 'dark' as Theme  & 'auto': 'light' as Theme & 'auto')} >
        {theme === 'light' ? <SunIcon/> : <MoonIcon />}
      </button>
      
    </nav>
  )
}
