import React from 'react'
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-[#3c3c3c]">
        <h1 className="text-2xl font-bold text-white">Content Creator Platform</h1>
        <nav>
          <Link href="/auth/signin">
            <Button variant="outline" className="mr-2">Sign In</Button>
          </Link>
          <Link href="/auth/signup">
            <Button>Sign Up</Button>
          </Link>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center bg-[#1e1e1e] text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Create Content Like a Pro</h2>
          <p className="mb-8">All-in-one platform for content creators</p>
          <Link href="/auth/signup">
            <Button size="lg">Start Your Free Trial</Button>
          </Link>
        </div>
      </main>

      <footer className="p-4 bg-[#3c3c3c] text-white text-center">
        © 2023 Content Creator Platform. All rights reserved.
      </footer>
    </div>
  )
}