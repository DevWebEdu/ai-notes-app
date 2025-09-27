import { shadow } from '@/styles/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { DarkModeToggle } from './DarkModeToggle'
import LogoutButton from './LogoutButton'
import { getUser } from '@/auth/server'
import { SidebarTrigger } from './ui/sidebar'

async function Header() {
  const user = await getUser()
  //console.log(user)
  return (
    <header
      className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{
        boxShadow: shadow,
      }}
    >
      <SidebarTrigger className='absolute left-1 top-1'/>
      <Link href={'/'} className="flex items-end gap-2">
        <Image
          src={'/goatius.png'}
          height={60}
          width={60}
          alt="logo"
          className="rounded-full"
        />
        <h1 className="flex flex-col pb-1 text-2xl leading-6 font-semibold">
          GOAT <span>notes</span>
        </h1>
      </Link>
      <div className="flex gap-4">
        {user ? (
          <LogoutButton/>
        ) : (
          <>
            <Button asChild>
              <Link href={'/sign-up'} className="hidden sm:block">
                Sign Up
              </Link>
            </Button>
            <Button asChild variant={'outline'}>
              <Link href={'/login'}>Login</Link>
            </Button>
            
          </>
         
        )}
         <DarkModeToggle />
      </div>
    </header>
  )
}

export default Header
