'use client'

import { useState } from 'react'
import { Search, Bookmark, PlusCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close' : 'Menu'}
      </Button>
      <div className={`w-64 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-4">
          {/* Google logo */}
          <svg className="h-8 w-auto mb-6" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
            {/* ... (SVG path data) ... */}
          </svg>

          <Button variant="outline" className="w-full justify-start mb-4">
            <PlusCircle className="mr-2 h-4 w-4" />
            New chat
          </Button>
        </div>

        <div className="flex-grow overflow-y-auto px-4">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-8" placeholder="Search messages" />
          </div>

          <Button variant="ghost" className="w-full justify-start mb-4">
            <Bookmark className="mr-2 h-4 w-4" />
            Bookmarks
          </Button>

          <Separator className="mb-4" />

          <span className="text-sm text-gray-500 mb-2 block">Previous 30 days</span>

          <Button variant="outline" className="w-full justify-start mt-2">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {/* ... (SVG path data) ... */}
            </svg>
            New Chat
          </Button>
        </div>
      </div>
    </>
  )
}