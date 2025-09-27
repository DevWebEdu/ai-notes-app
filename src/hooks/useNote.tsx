'use client'

import { NoteProviderContext, NoteProviderContextType } from '@/providers/NoteProvider'
import { useContext } from 'react'

function useNote() {
  const context = useContext(NoteProviderContext)
  if (!context)  new Error('useNote must be used within a NoteProvider')
  return context
}


export default useNote