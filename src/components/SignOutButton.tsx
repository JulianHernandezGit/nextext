'use client'

import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

export function SignOutButton() {
  return (
    <Button onClick={() => signOut()} variant="outline" className="bg-[#3c3c3c] text-white">
      Sign Out
    </Button>
  )
}