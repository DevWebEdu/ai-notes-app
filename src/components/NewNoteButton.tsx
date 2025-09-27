"use client"
import { User } from '@supabase/supabase-js'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'sonner'
import { debounceTimeout } from '@/lib/constans'
import { createNoteAction } from '@/action/notes'

type Props = {
  user: User | null
}
function NewNoteButton({ user }: Props) {
  //console.log(user?.email)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleClickNewButton = async () => {
    if (!user) {
      router.push('/login')
    } else {
      setLoading(true)

      await new Promise((resolve)=> setTimeout(resolve,debounceTimeout + 500))
      const uuid = uuidv4()
      await createNoteAction(uuid)
      router.push(`/?noteId=${uuid}`)
      toast.success('New Note Created')
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleClickNewButton}
      variant={'secondary'}
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : 'New note'}
    </Button>
  )
}

export default NewNoteButton
