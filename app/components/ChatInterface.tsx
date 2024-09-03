"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ChatInterface() {
  const [input, setInput] = useState('');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white p-4 border-r">
        <h2 className="text-xl font-bold mb-4">New chat</h2>
        <Input type="search" placeholder="Search messages" className="mb-4" />
        <Button variant="outline" className="w-full mb-4">Bookmarks</Button>
        <div className="text-sm text-gray-500 mb-2">Previous 30 days</div>
        <Button variant="ghost" className="w-full justify-start">
          <span className="mr-2">G</span> New Chat
        </Button>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white p-4 border-b flex items-center">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Google" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="google">Google</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
          <Select className="ml-2">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="gemini-1.5-flash-latest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gemini">gemini-1.5-flash-latest</SelectItem>
              {/* Add more options as needed */}
            </SelectContent>
          </Select>
          <div className="flex-1" />
          <Button variant="ghost" size="icon" className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </Button>
          <Button variant="ghost" size="icon" className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          </Button>
          <Button variant="ghost" size="icon" className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-4xl font-bold mb-4">G</div>
            <div className="text-xl">How can I help you today?</div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Message Gemini"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 mr-2"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="fixed top-4 right-4">Open Panel</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Right Panel</SheetTitle>
            <SheetDescription>
              This is where you can add prompts, file attachments, and bookmarks.
            </SheetDescription>
          </SheetHeader>
          {/* Add content for prompts, file attachments, and bookmarks here */}
        </SheetContent>
      </Sheet>
    </div>
  );
}