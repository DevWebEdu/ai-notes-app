'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { logOutAction } from '@/action/users'

function LogoutButton() {

  const [loading, setLoading] = useState(false)
    const router = useRouter()
  const handleLogout = async() => {
    setLoading(true)
    const {errorMessage}  = await logOutAction()
    if(!errorMessage ) {
        toast.success('LogOut',{
            description :'You have Been successfully  logged out'
        })
    } else {
        toast.error('Error',{
            description :errorMessage
        })
    }
    router.push("/")
    setLoading(false)
    //console.log('loging out')
  }

  return (
    <Button
      className="w-24"
      variant={'outline'}
      disabled={loading}
      onClick={handleLogout}
    >
      {loading ? <Loader2 className="animate-spin" /> : 'Log Out'}
    </Button>
  )
}

export default LogoutButton
